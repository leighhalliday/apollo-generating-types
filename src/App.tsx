import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import createClient from "./apolloClient";
import Products from "./Products";
import "./App.css";

const client = createClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Products />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}
