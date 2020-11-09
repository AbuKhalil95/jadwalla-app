/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import { handleSignUp } from '../../store/auth';
import { Button, FormGroup, FormControl, FormLabel, FormCheck, Form , Container, Row, Col } from "react-bootstrap";
import './auth.scss';
import signUpImg from '../../images/signup-image.jpg';
import { Link, withRouter } from "react-router-dom";

const Signup = props => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpValues = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
      role: e.target.role.value,
    };
    props.handleSignUp(signUpValues);
  };

  return (
    <>
   <Container>
  <Row>
    <Col>
    <h1>Sign Up</h1> <br/>
    <Form onSubmit={handleSubmit}>
        <FormGroup controlId="username" size="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            name="username"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup controlId="email" size="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            name="email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup controlId="password" size="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            name="password" placeholder="Password"
          />
        </FormGroup>
        <Form.Check type="radio"
          label="Student"
          value="student"
          name="role" />
        <Form.Check type="radio"
          label="Teacher"
          value="teacher"
          name="role" />

        <Button block size="large" type="submit">
          SignUp
        </Button>
        <br />
        <a>Or sign Up using Gmail <SocialIcon network="google" style={{ height: 35, width: 35 }} /></a>

      </Form>

    </Col>
    <Col>
    <div className="signup-image">
          <img src={signUpImg}  alt="sing up"/><br/>
          <Link to='./signin' className="signup">I am already a member</Link>
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

const mapDispatchToProps = { handleSignUp };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);