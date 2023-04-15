import styled from "styled-components";

export const OfferContainer = styled.div`
  background-color: var(--brightGray-color);
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    background-color: var(--white-color);
  }
  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

export const OfferBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1084px;
  margin: 0 auto;
  padding-top: 30px;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
`;

export const Left = styled.div`
  width: 455px;
  height: 600px;
  img {
    width: 455px;
    height: 600px;
    object-fit: cover !important;
  }
`;

export const Right = styled.div`
  width: 400px;
  background-color: var(--white-color);
  padding: 30px 40px;
  position: relative;
`;

export const DetailsBox = styled.div`
  margin-bottom: 45px;
`;

export const Price = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;
`;

export const Details = styled.div`
  display: flex;
`;

export const Subtitle = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  flex: 1 1;
  color: var(--spanishGray-color);
`;

export const Value = styled.span`
  margin-bottom: 10px;
  flex: 1 1;
  font-size: 14px;
  font-weight: bold;
  color: var(--graniteGray-color);
`;

export const Line = styled.div`
  border-bottom: solid 1px var(--darkGray-color);
`;

export const DescBox = styled.div`
  margin-top: 45px;
`;

export const ProductName = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 18.5px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  font-size: 18.5px;
  color: var(--graniteGray-color);
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const Avatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
`;

export const Username = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  width: 100%;
  height: 37px;
  color: var(--white-color);
  background-color: var(--caribbean-color);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 60px;
  :hover {
    opacity: 0.7;
  }
`;
