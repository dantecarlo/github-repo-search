// React
import React, { Component } from 'react';

// Apollo
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('networkError', networkError);
    console.log('graphQLErrors', graphQLErrors);
  }
})


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Github Users </h1>
        </header>
      </div>
    );
  }
}

export default App;
