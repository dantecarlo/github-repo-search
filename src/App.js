// React
import React, { Component } from "react";

// Apollo
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";

// Componentes
import Header from "./componenetes/Header";
import Usuarios from "./componenetes/Usuarios";

// Credenciales
import { credenciales } from "./credenciales"

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = credenciales.GITHUB_KEY;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

/*const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.example.com/graphql' }),
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${credenciales.GITHUB_KEY}`,
  },
  onError: ({ networkError, graphQLErrors }) => {
    console.log("networkError", networkError);
    console.log("graphQLErrors", graphQLErrors);
  }
});*/

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
        <Usuarios />
      </ApolloProvider>
    );
  }
}

export default App;
