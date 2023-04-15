import styled from "styled-components";

export const Container = styled.div.attrs(
  (props: { isElseWhere: Boolean }) => ({
    isElseWhere: props.isElseWhere,
  })
)`
  display: none;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 20px;
  @media only screen and (max-width: 1030px) {
    display: ${({ isElseWhere }) => !isElseWhere && "flex"};
  }
  @media only screen and (max-width: 600px) {
    display: ${({ isElseWhere }) => isElseWhere && "flex"};
  }
`;

export const Button = styled.button`
  background-color: var(--white-color);
  border: solid var(--caribbean-color) 1px;
  color: var(--caribbean-color);
  margin-top: 20px;
  height: 45px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: var(--caribbean-color);
    color: var(--white-color);
  }
`;

export const Disconnect = styled.button`
  color: var(--demonicPurple-color);
  background-color: var(--white-color);
  border: 1px solid var(--demonicPurple-color);
  margin-top: 20px;
  height: 45px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: var(--demonicPurple-color);
    color: var(--white-color);
    border: none;
  }
`;

export const Hide = styled.div.attrs((props: { isElseWhere: Boolean }) => ({
  isElseWhere: props.isElseWhere,
}))`
  display: none;
  @media only screen and (max-width: 768px) {
    display: ${({ isElseWhere }) => !isElseWhere && "inline"};
  }
`;
