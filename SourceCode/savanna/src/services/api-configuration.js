import React from "react";
import {
  HttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const APIClientProvider = (props) => {
  const { children } = props;

  const APIPaths = {
    staging: "https://profound-marmot-29.hasura.app/v1/graphql",
    production: "https://profound-marmot-29.hasura.app/v1/graphql",
  };

  const httpLink = new HttpLink({ uri: APIPaths.production });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: { ...headers },
    }));
    return forward(operation);
  });

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, authMiddleware, httpLink]),
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default APIClientProvider;
