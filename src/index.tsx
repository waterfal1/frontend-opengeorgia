import { createRoot } from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./configureStore";
import App from "./App";

import "./index.css";

const link = new HttpLink({
  uri: "https://og-backend-production.up.railway.app/myendpoint",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const { store, persistor } = configureStore();

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </PersistGate>
  </Provider>
);
