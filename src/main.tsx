import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { offersApi } from "./redux/ApiSlice";
import { GlobalStyle } from "./GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApiProvider api={offersApi}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ApiProvider>
);
