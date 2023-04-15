import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
  background-color: var(--silver-coor);
`;

export const PaymentBox = styled.div`
  width: 31.74%;
  min-width: 430px;
  height: 620px;
  border-radius: 15px;
  background-color: var(--white-color);
  box-sizing: border-box;
  box-shadow: var(--opacityDeepKoamaru-color) 0px 50px 100px -20px,
    var(--opacityBlack-color) 0px 30px 60px -30px,
    var(--opacityOxfordBlue-color) 0px -2px 6px 0px inset;
`;

export const Box = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h4`
  font-size: 18px;
  color: var(--spanishGray-color);
  margin-bottom: 45px;
`;

export const OrderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const OrderText = styled.span`
  font-size: 20px;
  color: var(--graniteGray-color);
`;

export const SplitPay = styled.div`
  border: var(--brightGray-color) solid 1px;
  width: 100%;
  box-sizing: border-box;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: var(--chineaseBlack-color);
  margin-bottom: 55px;
  box-sizing: border-box;
`;

export const Text = styled.p`
  font-size: 18px;
  padding-bottom: 30px;
  border-bottom: var(--brightGray-color) solid 1px;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Form = styled.form`
  padding: 0 20px;
`;

export const PurchaseDone = styled.p`
  font-size: 18px;
  padding-bottom: 30px;
  border-bottom: var(--brightGray-color) solid 1px;
  margin-left: 20px;
`;

export const CardBox = styled.div`
  height: 40px;
  padding: 12px 20px 0 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px var(--transOpacityDeepKoamaru-color),
    0 1px 0 var(--transOpacityBlack-color);
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  color: var(--white-color);
  background-color: var(--goGreen-color);
  border: none;
  margin-top: 35px;
  :hover {
    opacity: 0.7;
  }
`;
