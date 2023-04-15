import styled from "styled-components";

export const TopBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
  width: 102px;
  height: 40px;
  margin-right: 30px;
  margin-left: 20px;
  object-fit: cover;
  cursor: pointer;
`;

export const NavInput = styled.div.attrs((props: { isHome: Boolean }) => ({
  isHome: props.isHome,
}))`
  flex: 5;
  height: 100%;
  display: ${({ isHome }) => !isHome && "none"};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputBox = styled.div`
  width: 50%;
  min-width: 250px;
  border-radius: 5px;
  background-color: var(--cultured-color);
`;

export const CustomInput = styled.input`
  width: 100%;
  background-color: var(--cultured-color);
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 3px;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    gap: 0px;
  }
`;

export const SortBox = styled.div`
  background-color: var(--caribbean-color);
  width: 42px;
  height: 20px;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`;
export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  @media only screen and (max-width: 768px) {
    flex: none;
  }
`;
export const SortPriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Pages = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Select = styled.select`
  height: 35px;
  width: 130px;
  border-radius: 10px;
  margin-right: 20px;
  border: solid 1px var(--caribbean-color);
  background-color: var(--white-color);
  color: var(--caribbean-color);
  font-weight: bold;
  outline: none;
  box-sizing: border-box;
  padding-left: 7px;
  cursor: pointer;
  :hover {
    background-color: var(--caribbean-color);
    color: var(--white-color);
  }
`;

export const HideOption = styled.option`
  display: none;
`;

export const Options = styled.option`
  background-color: var(--white-color);
  color: var(--caribbean-color);
  outline: none;
  &:focus {
    background-color: var(--error-color);
  }
`;

export const EmoteBox = styled.div.attrs((props: { sort: Boolean }) => ({
  sort: props.sort,
}))`
  height: 18px;
  width: 18px;
  border: 1px solid var(--darkGray-color);
  border-radius: 100%;
  position: relative;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
  transition: right 0.2s ease-in-out 0s;
  box-sizing: border-box;
  right: ${({ sort }) => (sort ? "0px" : "-24px")};
`;

export const ButtonsBox = styled.div.attrs(
  (props: { isElseWhere: Boolean }) => ({
    isElseWhere: props.isElseWhere,
  })
)`
  display: flex;
  flex: 2;
  @media only screen and (max-width: 1030px) {
    display: ${({ isElseWhere }) => !isElseWhere && "none"};
  }
  @media only screen and (max-width: 600px) {
    display: ${({ isElseWhere }) => isElseWhere && "none"};
  }
`;

export const LogBtnsBox = styled.div.attrs(
  (props: { isElseWhere: Boolean }) => ({
    isElseWhere: props.isElseWhere,
  })
)`
  display: flex;
  justify-content: ${({ isElseWhere }) =>
    isElseWhere ? "flex-end" : "center"};
  gap: ${({ isElseWhere }) => (isElseWhere ? "30px" : "10px")};
  width: 100%;
  margin-right: 10px;
`;

export const Buttons = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 4px;
  background-color: var(--white-color);
  border: solid var(--caribbean-color) 1px;
  color: var(--caribbean-color);
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    background-color: var(--caribbean-color);
    color: var(--white-color);
  }
`;

export const Disconnect = styled.button`
  width: 120px;
  height: 30px;
  color: var(--demonicPurple-color);
  background-color: var(--white-color);
  border: 1px solid var(--demonicPurple-color);
  border-radius: 5px;
  box-sizing: border-box;
  :hover {
    background-color: var(--demonicPurple-color);
    color: var(--white-color);
    border: none;
  }
`;
