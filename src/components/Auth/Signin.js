/* eslint-disable no-unused-vars */
import './auth.scss';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { handleSignIn } from '../../store/auth';
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import signUpImg from '../../images/signin-image.jpg';
import { withSnackbar } from 'notistack';

const Signin = (props) => {
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signInValues = {
      username: await e.target.username.value,
      password: await e.target.password.value,
    };
    await props.handleSignIn(signInValues);
    setRedirect(true);
  }
  const handleClick = button => () => {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    props.enqueueSnackbar('Ready to start a new Learning Adventure?', { variant: 'info' });
    props.enqueueSnackbar(button.message, { variant: button.variant });
  };
  return (
    <>
      {redirect && <Redirect to='/' />}
      <Card>
        <Container className={'siucon'}>
          <Row>
            <Col>
              <h1>Sign In</h1> <br />
              <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    name="username"
                    placeholder="Username"
                  />

                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    name="password" placeholder="Password"
                  />
                  
                </FormGroup>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" checked />
                </Form.Group>
​
                <Button block bsSize="large" type="submit" onClick={handleClick({ variant: 'success', message: 'Welcome back' })}>
                  Login
                </Button>
              </form>
            </Col>

            <Col>
              <div class="signin-image">
                <img src={signUpImg} alt="sing in" /> <br /> <br />
                <a href="/signup" class="signin">Not a user? Create an account</a>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.token
});

const mapDispatchToProps = { handleSignIn };

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Signin))
