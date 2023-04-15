import { useGetOfferQuery } from "../redux/ApiSlice";
import ImageGallery from "react-image-gallery";
import { useNavigate, useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "../assets/banner.jpg";
import { Spinner, SpinnerBox } from "../appStyles";

import {
  OfferContainer,
  OfferBox,
  Left,
  Right,
  DetailsBox,
  Price,
  Details,
  Subtitle,
  Value,
  Line,
  DescBox,
  ProductName,
  Description,
  UserBox,
  Avatar,
  Username,
  Button,
} from "./offerStyles";

type Image = {
  original: string;
};

export type Productype = {
  title: string;
  price: number;
};

export default function Offer() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, isLoading } = useGetOfferQuery(`${id}`);

  function handleNavigate() {
    if (data) {
      const product: Productype = {
        title: data.product_name,
        price: data.product_price,
      };
      navigate("/payment", {
        state: { product },
      });
    }
  }

  const image: Image[] = [];
  data?.product_pictures.forEach((picture) =>
    image.push({ original: picture.secure_url as string })
  );
  return !isLoading ? (
    <OfferContainer>
      <OfferBox>
        <Left>
          <ImageGallery
            items={image}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideInterval={4000}
            slideDuration={800}
            showBullets={image.length > 1 ? true : false}
            infinite={true}
            startIndex={0}
            showNav={false}
          />
        </Left>
        <Right>
          <DetailsBox>
            <Price>{data?.product_price} €</Price>
            {data?.product_details.map((product, index: number) => {
              const keys: string[] = Object.keys(product);
              return (
                <Details key={index}>
                  <Subtitle>{keys[0]}</Subtitle>
                  <Value>{product[keys[0]]}</Value>
                </Details>
              );
            })}
          </DetailsBox>
          <Line />
          <DescBox>
            <ProductName>{data?.product_name}</ProductName>
            <Description>{data?.product_description}</Description>
            {data?.owner?.account?.avatar && (
              <UserBox>
                <Avatar
                  src={data?.owner?.account?.avatar?.secure_url}
                  alt="user's avatar"
                />
                <Username>{data?.owner?.account?.username}</Username>
              </UserBox>
            )}
          </DescBox>
          <Button onClick={handleNavigate}>Buy</Button>
        </Right>
      </OfferBox>
    </OfferContainer>
  ) : (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  );
}
