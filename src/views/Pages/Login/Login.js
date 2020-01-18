import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { authenSignIn } from '../Graphql/Graphql'
import gql from 'graphql-tag';
import { setToken } from './token';
import {Redirect} from 'react-router-dom'


class Login extends Component {
  state = {
    login: true,
    email: '',
    password: '',
    name: '',
    isLogin: true
  }
  render() {
    const { login, email, password, name, isLogin } = this.state
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h4 className="mv3">{isLogin ? 'Login' : 'Sign Up'}</h4>
                      <p className="text-muted">Sign In to your account</p>
                      <div className="flex flex-column">
                        {!login && (
                          <input
                            value={name}
                            onChange={e => this.setState({ name: e.target.value })}
                            type="text"
                            placeholder="Your name"
                          />
                        )}
                        <input
                          value={email}
                          onChange={e => this.setState({ email: e.target.value })}
                          type="text"
                          placeholder="Your email address"
                        />
                        <input
                          value={password}
                          onChange={e => this.setState({ password: e.target.value })}
                          type="password"
                          placeholder="Choose a safe password"
                        />
                      </div>
                      <div className="flex mt3">
                        <button type="button" class="btn btn-primary" onClick={this._confirm}>
                          {login ? 'login' : 'create account'}
                        </button>
                        <button type="button" onClick={() => this.setState({ login: !login })} class="pointer button"><span class="cil-contrast btn-icon mr-2"></span>
                          {login
                            ? 'Need to create account?'
                            : 'already have an account'
                          }
                        </button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
  _confirm = async () => {
    let authen = authenSignIn(this.state.email, this.state.password)
      .catch((error) => {
        throw new Error(error);
      })
    if(authen) {
      window.location.href = '/dashboard'
    } 
  }
  _saveUserData = token => {
    setToken(token)
  }
}

export default Login;
