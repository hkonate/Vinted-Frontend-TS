import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid var(--silver-color);
  border-right: 2px solid var(--silver-color);
  border-bottom: 2px solid var(--silver-color);
  border-left: 4px solid var(--caribbean-color);
  background: transparent;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomSpan = styled.span`
  font-size: 12px;
`;

export const Image = styled.img`
  height: 100px;
  object-fit: cover;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 30px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin: 30px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 275px;
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 1px solid var(--tiffanyBlue-color);
  height: 35px;
  margin-bottom: 20px;
  outline: none;
`;

export const Text = styled.p`
  font-size: 15px;
  color: var(--caribbean-color);
`;

export const Error = styled.p`
  font-size: 15px;
  color: var(--error-color);
`;
