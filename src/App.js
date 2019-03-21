// React
import React, { Component } from "react";

// Apollo
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Componentes
import Header from "./componenetes/Header";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://api.example.com/graphql" }),
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("networkError", networkError);
    console.log("graphQLErrors", graphQLErrors);
  }
});

/*const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('networkError', networkError);
    console.log('graphQLErrors', graphQLErrors);
  }
})*/

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
      </ApolloProvider>
    );
  }
}

export default App;
