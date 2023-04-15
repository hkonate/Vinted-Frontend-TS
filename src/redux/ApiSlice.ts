import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  UserType,
  AuthType,
  Product,
  Products,
  RegisterInfosType,
  PublishType,
  Filter,
} from "./Types";

type formData = {
  formData: FormData;
  token: string;
};

type Payment = {
  token: string;
  title: string;
  amount: number;
};

type Status = {
  status: string;
};

type apiFilter = {
  sort: string;
  min: number;
  max: number;
};

export const offersApi = createApi({
  reducerPath: "offersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lereacteur-vinted-api.herokuapp.com",
  }),
  endpoints: (builder) => ({
    getAllOffers: builder.query<Products, apiFilter>({
      query: ({ sort, min, max }) =>
        `offers?sort=${sort}&priceMin=${min}&price-max=${max}`,
    }),
    getOffer: builder.query<Product, string>({
      query: (productID) => `offer/${productID}`,
    }),
    loginUser: builder.mutation<AuthType, UserType>({
      query: (userInfos) => ({
        url: "user/login",
        method: "POST",
        body: userInfos,
      }),
    }),
    RegisterUser: builder.mutation<AuthType, RegisterInfosType>({
      query: (userInfos) => ({
        url: "user/signup",
        method: "POST",
        body: userInfos,
      }),
    }),
    PublishOffer: builder.mutation<PublishType, formData>({
      query: ({ formData, token }) => ({
        url: "offer/publish",
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    ProductPayment: builder.mutation<Status, Payment>({
      query: ({ token, title, amount }) => ({
        url: "payment",
        method: "POST",
        body: {
          token,
          title,
          amount,
        },
      }),
    }),
  }),
});

export const {
  useGetAllOffersQuery,
  useGetOfferQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  usePublishOfferMutation,
  useProductPaymentMutation,
} = offersApi;
