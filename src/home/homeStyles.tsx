import styled from "styled-components";

export const Banner = styled.div`
  height: 700px;
  position: relative;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Block = styled.div`
  width: 21.73%;
  min-width: 350px;
  height: 38.86%;
  background-color: var(--white-color);
  border-radius: 10px;
  box-shadow: var(--japaneseIndigo-color) 0px 20px 30px -10px;
  position: absolute;
  top: 170px;
  left: 12%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 35px;
  box-sizing: border-box;
`;

export const Text = styled.p`
  color: var(--black-color);
  font-size: 35px;
  font-weight: 590;
`;

export const Button = styled.button`
  width: 188px;
  height: 45px;
  background-color: var(--caribbean-color);
  color: var(--white-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    opacity: 0.7;
  }
`;

export const Offers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding-top: 28px;
`;

export const AvatarBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  margin-left: 20px;
  box-sizing: border-box;
  object-fit: cover;
`;

export const Username = styled.p`
  color: var(--spanishGray-color);
  font-size: 12px;
`;

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    box-sizing: border-box;
  }
  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    font-weight: bold;
    margin-top: 50px;
    .page-item:not(:first-child) {
      margin-left: -1px;
    }
    .page-item.active .page-link {
      z-index: 3;
      color: var(--white-color);
      background-color: var(--brandeisBlue-color);
      border-color: var(--brandeisBlue-color);
    }
    .page-item.disabled .page-link {
      color: var(--auroMetalSaurus-color);
      pointer-events: none;
      background-color: var(--white-color);
      border-color: var(--platinium-color);
    }
  }
  .page-link {
    display: block;
    padding: 0.375rem 0.75rem;
    color: var(--brandeisBlue-color);
    text-decoration: none;
    background-color: var(--white-color);
    border: 1px solid var(--platinium-color);
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
  }
`;

export const ProductBox = styled.div.attrs((props: { noAvatar: Boolean }) => ({
  noAvatar: props.noAvatar,
}))`
  box-sizing: border-box;
  margin-bottom: 5px;
  margin-top: ${({ noAvatar }) => noAvatar && "39px"};
`;

export const ProductImg = styled.img`
  width: 235px;
  height: 360px;
  padding: 0 5px;
  object-fit: cover;
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 4px;
`;

export const Price = styled.span`
  font-size: 14px;
`;

export const Detail = styled.span`
  color: var(--spanishGray-color);
  font-size: 12px;
`;
