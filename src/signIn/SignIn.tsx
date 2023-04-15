import { Link, useLocation, useNavigate } from "react-router-dom";
import { Block, Text, Title, Form, InputField, Error } from "../appStyles";
import { Button } from "./signInStyles";
import { useLoginUserMutation } from "../redux/ApiSlice";
import { UserType } from "../redux/Types";
import { FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Login } from "../redux/UserSlice";
import { Productype } from "../offer/Offer";
import { Spinner, SpinnerBox } from "../appStyles";

export default function SignIn({ path = "/" }: { path?: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isLoading, data, isError }] = useLoginUserMutation();
  useEffect(() => {
    if (data) {
      dispatch(Login(data));
      localStorage.setItem("user", JSON.stringify(data));
      if (location.state) {
        const product: Productype = {
          title: location.state.product.title,
          price: location.state.product.price,
        };
        navigate(path, {
          state: { product },
        });
      } else {
        navigate(path);
      }
    }
  }, [data, navigate]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userInfos: UserType = {
      email: (event.currentTarget[0] as HTMLInputElement).value,
      password: (event.currentTarget[1] as HTMLInputElement).value,
    };
    loginUser(userInfos);
  }

  return (!isLoading as boolean) ? (
    <Block>
      <Title>Se connecter</Title>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <InputField type="email" name="email" placeholder="Email" required />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button type="submit" disabled={isLoading}>
          Se connecter
        </Button>
        <Link style={{ textDecoration: "none" }} to="/signUp">
          <Text>Pas encore de compte ? Inscris-toi !</Text>
          {isError && <Error>Le compte n'existe pas.</Error>}
        </Link>
      </Form>
    </Block>
  ) : (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  );
}
