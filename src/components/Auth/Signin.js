/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleSignIn } from '../../store/auth';
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col } from "react-bootstrap";
import './auth.scss';
import  { Redirect } from 'react-router-dom';
import signUpImg from '../../images/signin-image.jpg';
import { Link, withRouter } from "react-router-dom";

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

  
  return (
    <>
    <Container>
  <Row>
    <Col>
    <h1>Sign In</h1> <br/>
    <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" size="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            name="username"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup controlId="password" size="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            name="password" placeholder="Password"
          />
        </FormGroup>
        <Button block size="large" type="submit">
          Login
        </Button>
      </form>
    </Col>
    <Col>
    <div className="signin-image">
          <img src={signUpImg}  alt="sing in"/> <br/>
          <Link to='./signup' className="signin">Create an account</Link>
      </div>
    </Col>
  </Row>
  
</Container>

    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.token
});

const mapDispatchToProps = { handleSignIn };

export default connect(mapStateToProps, mapDispatchToProps)(Signin);