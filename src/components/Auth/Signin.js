/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleSignIn } from '../../store/auth';
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import signUpImg from '../../images/signin-image.jpg';
import { Link, withRouter } from "react-router-dom";
import { withSnackbar } from 'notistack';
import bg from './../../images/study.jpg';
import './auth.scss';


const Signin = props => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signInValues = {
      username: await e.target.username.value,
      password: await e.target.password.value,
    };
    await props.handleSignIn(signInValues);
    window.location.href="/";
  }
  const handleClick = button => () => {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    props.enqueueSnackbar('Ready to start a new Learning Adventure?', { variant: 'info' });
    props.enqueueSnackbar(button.message, { variant: button.variant });

  };


  return (
    <>
      <div className="signindiv" >
        <Card className="cardsi">
          <Container className='siucon'>
            <Row className="row1">
              <Col className="col1">

                <form onSubmit={handleSubmit}>
                  <h1>Sign In</h1> <br />
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

                  <Button block bsSize="large" type="submit" onClick={handleClick({ variant: 'success', message: 'Welcome back' })}>
                    Login
                </Button>
                </form>

              </Col>
              <Col>
                <div className="signin-image">
                  <img src={signUpImg} alt="sing in" /> <br /> <br />
                  <a href="/signup" className="signin">Not a user? Create an account</a>

                </div>
              </Col>
            </Row>

          </Container>
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.token
});

const mapDispatchToProps = { handleSignIn };

export default connect(mapStateToProps, mapDispatchToProps)(Signin);