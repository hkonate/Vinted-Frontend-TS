import styled from "styled-components";

export const PublishBox = styled.div`
  background-color: var(--brightGray-color);
  height: 100%;
  padding-top: 45px;
`;

export const Center = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 26px;
  font-weight: normal;
`;
export const DotedBox = styled.label.attrs((props: { isEmpty: Boolean }) => ({
  isEmpty: props.isEmpty,
}))`
  height: 100%;
  border: dotted 2px var(--brightGray-color);
  display: flex;
  align-items: center;
  height: 200px;
  box-sizing: border-box;
  text-align: center;
  gap: 20px;
  padding: ${(props) => !props.isEmpty && "0px 20px"};
  overflow-x: scroll;
  scrollbar-width: none;
  cursor: pointer;
`;

export const Label = styled.label`
  border: var(--caribbean-color) solid 1px;
  border-radius: 5px;
  height: 45px;
  width: 201px;
  color: var(--caribbean-color);
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    border: none;
    background-color: var(--caribbean-color);
    color: var(--white-color);
  }
`;

export const CenterBox = styled.div`
  width: 100%;
`;

export const Close = styled.div`
  font-family: cursive;
  position: absolute;
  top: 2px;
  right: 4px;
  background-color: var(--white-color);
  width: 20px;
  height: 10px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding-top: 2px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Form = styled.form`
  padding-bottom: 70px;
`;

export const LabelText = styled.p`
  font-size: 30px;
  color: var(--silver-color);
  text-align: center;
`;

export const Image = styled.img`
  height: 160px;
  width: 250px;
  border-radius: 5px;
  flex-shrink: 0;
  object-fit: cover;
  box-sizing: border-box;
`;

export const ImageBlock = styled.div`
  background-color: var(--white-color);
  height: 250px;
  padding: 23px;
  box-shadow: var(--opacityDeepKoamaru-color) 0px 50px 100px -20px,
    var(--opacityBlack-color) 0px 30px 60px -30px,
    var(--opacityOxfordBlue-color) 0px -2px 6px 0px inset;
  margin-bottom: 40px;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
`;

export const Block = styled.div`
  margin-bottom: 40px;
  box-shadow: var(--opacityDeepKoamaru-color) 0px 50px 100px -20px,
    var(--opacityBlack-color) 0px 30px 60px -30px,
    var(--opacityOxfordBlue-color) 0px -2px 6px 0px inset;
  background-color: var(--white-color);
  border-radius: 5px;
  box-sizing: border-box;
`;

export const InfoBox = styled.div`
  border-bottom: 1px solid var(--brightGray-color);
  padding: 24px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  display: none;
`;

export const Field = styled.input`
  border: none;
  resize: none;
  outline: none;
  font-size: 18px;
  flex: 1 1;
  border-bottom: 1px solid var(--brightGray-color);
  box-sizing: border-box;
  color: var(--oldSilver-color);
  :focus {
    border-bottom: solid 1px var(--caribbean-color);
  }
`;

export const Box = styled.div`
  display: flex;
  height: 74px;
  border-bottom: 1px solid var(--brightGray-color);
  padding: 24px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  flex: 1 1;
  border-bottom: 1px solid var(--brightGray-color);
  color: var(--oldSilver-color);
  font-size: 18px;
  box-sizing: border-box;
  :focus {
    border-bottom: solid 1px var(--caribbean-color);
  }
`;

export const TextAreaBox = styled.div`
  display: flex;
  border-bottom: 1px solid var(--brightGray-color);
  padding: 24px;
  box-sizing: border-box;
`;
export const Subtitle = styled.span`
  flex: 1 1;
  font-size: 20px;
`;

export const PriceBlock = styled.div`
  display: flex;
  height: 170px;
  padding: 24px;
  border-bottom: 1px solid var(--brightGray-color);
  box-sizing: border-box;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  box-sizing: border-box;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  box-sizing: border-box;
  height: 74px;
`;

export const CheckBox = styled.input`
  margin-right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const PublishButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`;

export const PublishButton = styled.button`
  width: 88px;
  height: 45px;
  padding-top: 2px;
  color: var(--white-color);
  background-color: var(--caribbean-color);
  border: none;
  border-radius: 5px;
  font-size: 15px;
  margin-right: 35px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Error = styled.p`
  color: var(--error-color);
  font-size: 20px;
  text-align: center;
`;
