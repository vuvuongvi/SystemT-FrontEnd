import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
});
let loginQuery = gql`
  query login($name: String!, $password: String!) {
   login(name: $name, password: $password) {
     token
   }
  }
`
export const authenSignIn = async (name, password) => {
  client.query({
    query: loginQuery,
    variables: {
      name: name,
      password: password
    }
  }).then(result => {
    if (result) {
      localStorage.setItem('sys_access', result.data.login.token);
    }
  });
}
