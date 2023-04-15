import { useLocation, useNavigate } from "react-router-dom";
import { Spinner, SpinnerBox } from "../appStyles";

import {
  Container,
  PaymentBox,
  Box,
  Title,
  OrderBox,
  OrderText,
  SplitPay,
  Total,
  Text,
  Bold,
  Form,
  CardBox,
  PurchaseDone,
  Button,
} from "./paymentStyles";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { Authentificated, RootState } from "../redux/Types";
import { StripeCardElement } from "@stripe/stripe-js";
import { useProductPaymentMutation } from "../redux/ApiSlice";
import { Error } from "../publish/publishStyles";
import { useEffect } from "react";

type OrderInfosType = {
  name: string;
  price: number | string;
};

type ProductType = {
  title: string;
  price: number;
};

export function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;
  const user = useSelector(
    (state: RootState) => state.user as unknown as Authentificated
  );

  const [ProductPayment, { data, isLoading, isError }] =
    useProductPaymentMutation();
  const orderInfos: OrderInfosType[] = [
    { name: "Commande", price: product.price + " €" },
    { name: "Frais protection acheteurs", price: "1.00 €" },
    { name: "Frais de port", price: "2.00 €" },
  ];

  useEffect(() => {
    if (data?.status === "succeeded") {
      const timeout = setTimeout(() => navigate("/"), 4000);
      return () => clearTimeout(timeout);
    }
  }, [data]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cardElement = elements?.getElement(CardElement) as StripeCardElement;
    const stripeResponse = await stripe?.createToken(cardElement, {
      name: `${user.user.account.username}`,
    });

    const stripeToken = stripeResponse?.token?.id;

    if (stripeToken) {
      ProductPayment({
        token: stripeToken.toString(),
        title: product.title.toString(),
        amount: product.price + 3,
      });
    }
  }
  return !isLoading ? (
    <Container>
      <PaymentBox>
        <Box>
          <Title>Récapitulatif de la commande</Title>
          {orderInfos.map((order: OrderInfosType, idx: number) => (
            <OrderBox key={idx}>
              <OrderText>{order.name}</OrderText>
              <OrderText>{order.price}</OrderText>
            </OrderBox>
          ))}
        </Box>
        <SplitPay />
        <Box>
          <Total>
            <span>Total</span>
            <span>{product.price + 3} €</span>
          </Total>
          <Text>
            Il ne vous reste plus qu'un étape pour vous offrir{" "}
            <Bold>{product.title}</Bold> 😍. Vous allez payer{" "}
            <Bold>{product.price + 3} €</Bold> (frais de protection et frais de
            port inclus).
          </Text>
        </Box>
        {data?.status === "succeeded" ? (
          <PurchaseDone>
            Merci pour votre achat, vous allez être redirigé automatiquement
            vers la page d'accueil dans quelques secondes...
          </PurchaseDone>
        ) : (
          <Form onSubmit={(e) => handleSubmit(e)}>
            <CardBox>
              <CardElement />
            </CardBox>
            <Button type="submit" disabled={isLoading}>
              Payez maintenant
            </Button>
          </Form>
        )}
        {isError && <Error>Quelque chose n'a pas fonctionné.</Error>}
      </PaymentBox>
    </Container>
  ) : (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  );
}
