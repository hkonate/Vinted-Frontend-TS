import styled from "styled-components";

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  transform: scale(2);
  box-sizing: border-box;
`;

export const Newsletter = styled.span`
  font-size: 20px;
  color: var(--oldSilver-color);
`;

export const Terms = styled.p`
  font-size: 15px;
  color: var(--spanishGray-color);
  text-align: justify;
`;

export const Button = styled.button`
  height: 47px;
  color: white;
  background-color: var(--caribbean-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    opacity: 0.7;
  }
`;
