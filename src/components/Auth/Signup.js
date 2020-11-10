/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import { handleSignUp } from '../../store/auth';
import { Button, FormGroup, FormControl, FormLabel, FormCheck, Form, Container, Row, Col, Card } from "react-bootstrap";
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
      <Card>
        <Container className={'siucon'}>
          <Row>
            <Col>
              <h1>Sign Up</h1> <br />
              <Form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                  <FormLabel>Username</FormLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    name="password" placeholder="Password"
                  />
                </FormGroup>
                <FormGroup>
                <Form.Check inline type="radio"
                  label="Student"
                  value="student"
                  name="role" />
                <Form.Check inline type="radio"
                  label="Teacher"
                  value="teacher"
                  name="role" />

                </FormGroup>
                

                <Button block bsSize="large" type="submit">
                  SignUp
        </Button>
                <br />
                {/* <a>Or sign Up using Gmail <SocialIcon network="google" style={{ height: 35, width: 35 }} /></a> */}

              </Form>

            </Col>
            <Col>
            <br /> <br/> <br/>
              <div class="signup-image">
                <img src={signUpImg} alt="sing up" />  <br /> <br/>
                <a href="/signin" class="signup">I am already member</a>
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

const mapDispatchToProps = { handleSignUp };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);