import { Link, useNavigate } from "react-router-dom";
import { Block, Text, Title, Form, InputField, Error } from "../appStyles";
import { CheckBox, Input, Newsletter, Terms, Button } from "./signUpStyles";
import { useRegisterUserMutation } from "../redux/ApiSlice";
import { RegisterInfosType, UserInitialState } from "../redux/Types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Login } from "../redux/UserSlice";
import { Spinner, SpinnerBox } from "../appStyles";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [RegisterUser, { isLoading, data, isError }] =
    useRegisterUserMutation();
  useEffect(() => {
    if (data) {
      const userLogs: UserInitialState = { user: data };
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(Login(userLogs));
      navigate("/");
    }
  }, [data]);
  function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userInfos: RegisterInfosType = {
      email: (event.currentTarget[1] as HTMLInputElement).value,
      username: (event.currentTarget[0] as HTMLInputElement).value,
      password: (event.currentTarget[2] as HTMLInputElement).value,
      newsletter: (event.currentTarget[3] as HTMLInputElement).checked,
    };
    RegisterUser(userInfos);
  }
  return !isLoading ? (
    <Block>
      <Title>S'inscrire</Title>
      <Form onSubmit={(e) => handleRegistration(e)}>
        <InputField type="text" placeholder="Username" required />
        <InputField type="email" placeholder="Email" required />
        <InputField type="password" placeholder="Password" required />
        <CheckBox>
          <Input type="checkbox" />
          <Newsletter>SS'inscrire à notre newsletter</Newsletter>
        </CheckBox>
        <Terms>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </Terms>
        <Button type="submit" disabled={isLoading}>
          S'inscrire
        </Button>
        <Link style={{ textDecoration: "none" }} to="/signIn">
          <Text>Tu as déjà un compte ? Connecte-toi !</Text>
          {isError && <Error>Quelque chose n'a pas fonctionné.</Error>}
        </Link>
      </Form>
    </Block>
  ) : (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  );
}
