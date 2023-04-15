import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  TopBar,
  Container,
  NavInput,
  CustomInput,
  LogoBox,
  Logo,
  Box,
  SearchBox,
  FilterBox,
  SortBox,
  Prices,
  Pages,
  Select,
  HideOption,
  Options,
  EmoteBox,
  ButtonsBox,
  LogBtnsBox,
  InputBox,
  Buttons,
  Disconnect,
  SortPriceBox,
} from "./navbarStyles";
import Image from "../../assets/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  Search,
  SortPrice,
  UpdateOfferPerPage,
} from "../../redux/Filter.slice";
import { Logout } from "../../redux/UserSlice";
import { Slider } from "../Slider/Slider";
import { RootState, Authentificated } from "../../redux/Types";

export function Navbar() {
  const location = useLocation();
  const { sort } = useSelector((state: RootState) => state.filter.price);
  const user = useSelector(
    (state: RootState) => state.user
  ) as unknown as Authentificated;
  const dispatch = useDispatch();
  const arrayOfOptions = ["40", "50", "60", "70"];
  const navigate = useNavigate();

  function handleClick(value: number) {
    dispatch(UpdateOfferPerPage(value));
  }
  function handleNavigate() {
    navigate("/");
  }

  function handleSort() {
    if (sort === "price-asc") dispatch(SortPrice("price-desc"));
    else dispatch(SortPrice("price-asc"));
  }

  function handleSearch(model: string) {
    dispatch(Search(model));
  }

  function handleDisconect() {
    dispatch(Logout());
  }

  return (
    <TopBar>
      <Container>
        <LogoBox onClick={handleNavigate}>
          <Logo src={Image} alt="Vinted's logo" />
        </LogoBox>
        <NavInput isHome={location.pathname === "/"}>
          <Box>
            <SearchBox>
              <InputBox>
                <CustomInput
                  onChange={(e) => handleSearch(e.target.value)}
                  type="text"
                  placeholder="Looking for articles"
                />
              </InputBox>
            </SearchBox>
            <FilterBox>
              <Prices>
                <SortPriceBox>
                  <span>Trier:</span>
                  <SortBox onClick={handleSort}>
                    <EmoteBox sort={sort === "price-asc"}>
                      {sort === "price-asc" ? <span>⇡</span> : <span>⇣</span>}
                    </EmoteBox>
                  </SortBox>
                </SortPriceBox>
              </Prices>
              <Slider />
              <Pages>
                <Select>
                  <HideOption value="">Offres par pages</HideOption>
                  {arrayOfOptions.map((option, idx) => (
                    <Options
                      onClick={() => handleClick(Number(option))}
                      key={idx}
                      value={option}
                    >
                      {option}
                    </Options>
                  ))}
                </Select>
              </Pages>
            </FilterBox>
          </Box>
        </NavInput>
        <ButtonsBox isElseWhere={location.pathname !== "/"}>
          <LogBtnsBox isElseWhere={location.pathname !== "/"}>
            <Link
              hidden={user.user !== null || location.pathname === "/signIn"}
              to="signIn"
            >
              <Buttons>Se connecter</Buttons>
            </Link>
            <Link
              hidden={user.user !== null || location.pathname === "/signUp"}
              to="signUp"
            >
              <Buttons>S'inscrire</Buttons>
            </Link>
            <Link to="/publish">
              <Buttons hidden={location.pathname === "/publish"}>
                Vends tes articles
              </Buttons>
            </Link>
            <Disconnect onClick={handleDisconect} hidden={user.user === null}>
              Se déconnecter
            </Disconnect>
          </LogBtnsBox>
        </ButtonsBox>
      </Container>
    </TopBar>
  );
}
