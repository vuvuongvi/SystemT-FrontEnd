import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});
export const authenSignIn = () => {
  console.log('hihi');
  client.query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  }).then(result => console.log(result));
}

class Graphql extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
    );
  }
}

export default Graphql;
