export type Product = PublishType & {
  product_pictures: {
    [key: string]: string | number | boolean | string[];
  }[];
};

export type PublishType = {
  _id: string;
  product_name: string;
  product_description: string;
  product_price: number;
  product_details: {
    [key: string]: string;
  }[];
  owner: {
    account: {
      username: string;
      avatar: {
        asset_id: string;
        public_id: string;
        version: number;
        version_id: string;
        signature: string;
        width: number;
        height: number;
        format: string;
        resource_type: string;
        created_at: string;
        tags: string[];
        bytes: number;
        type: string;
        etag: string;
        placeholder: boolean;
        url: string;
        secure_url: string;
        folder: string;
        access_mode: string;
        original_filename: string;
        api_key: string;
      };
    };
    _id: string;
  };
  product_image: {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: string[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    folder: string;
    access_mode: string;
    original_filename: string;
    api_key: string;
  };
};

export type AuthType = {
  _id: string;
  token: string;
  account: {
    username: string;
  };
};
export type Authentificated = {
  user: AuthType;
};

export type Filter = {
  search: string;
  limit: number;
  price: {
    sort: string;
    minMax: number[];
  };
};

export interface RootState {
  user: AuthType;
  offers: Products;
  filter: Filter;
}

export type UserInitialState = {
  user: AuthType | null;
};

export type OfferInitialState = {
  offers: Products | null;
};

export type RegisterInfosType = {
  email: string;
  username: string;
  password: string;
  newsletter: boolean;
};

export type Products = {
  count: string;
  offers: Product[];
};

export type UserType = {
  email: string;
  password: string;
};

export type InpuDataType = {
  name: string;
  placeholder: string;
};
