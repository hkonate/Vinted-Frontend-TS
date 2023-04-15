import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button, Disconnect, Hide } from "./buttonsStyles";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/UserSlice";
import { CSSObjectWithLabel } from "react-select/dist/declarations/src";
import { UpdateOfferPerPage } from "../../redux/Filter.slice";
import { Authentificated, RootState } from "../../redux/Types";
type Option = {
  value: string;
  label: string;
};

export function Buttons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loacation = useLocation();
  const user = useSelector(
    (state: RootState) => state.user
  ) as unknown as Authentificated;

  const options: Option[] = [
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
  ];

  const customStyles = {
    control: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      borderColor: "red",
      backgroundColor: "white",
      border: "solid #2cb1ba 1px",
      color: " #2cb1ba",
      marginTop: "20px",
      height: "45px",
      borderRadius: "10px",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#2cb1ba",
      },
    }),
    dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      color: " #2cb1ba",
      "&:hover": {
        color: "#2cb1ba",
      },
    }),
    placeholder: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      color: " #2cb1ba",
    }),
    indicatorSeparator: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      backgroundColor: " #2cb1ba",
    }),
    singleValue: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      color: " #2cb1ba",
    }),
    option: (
      baseStyles: CSSObjectWithLabel,
      state: { isSelected: Boolean }
    ) => ({
      ...baseStyles,
      color: !state.isSelected ? " #2cb1ba" : "white",
    }),
  };

  function handleLogout() {
    dispatch(Logout());
    navigate("/");
  }
  function handleClick(newValue: any) {
    const option = newValue as Option;
    if (option) {
      dispatch(UpdateOfferPerPage(Number(option.value)));
    }
  }

  return (
    <Container isElseWhere={location.pathname !== "/"}>
      <Hide isElseWhere={location.pathname !== "/"}>
        <Select
          hideSelectedOptions={true}
          onChange={handleClick}
          menuPlacement="top"
          options={options}
          styles={customStyles}
          placeholder="Offres par pages"
        />
      </Hide>
      <Button
        hidden={user.user !== null || location.pathname === "/signUp"}
        onClick={() => navigate("/signUp")}
      >
        S'incrire
      </Button>
      <Button
        hidden={user.user !== null || location.pathname === "/signIn"}
        onClick={() => navigate("/signIn")}
      >
        Se connecter
      </Button>
      <Button
        hidden={location.pathname === "/publish"}
        onClick={() => navigate("/publish")}
      >
        Vends tes articles
      </Button>
      <Disconnect
        hidden={user.user === null}
        className="btn-disconnect"
        onClick={handleLogout}
      >
        Se déconnecter
      </Disconnect>
    </Container>
  );
}
