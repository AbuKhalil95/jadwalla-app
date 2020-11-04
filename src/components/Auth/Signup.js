/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { handleSignUp } from '../../store/auth';
import { Button, FormGroup, FormControl, FormLabel, FormCheck, Form } from "react-bootstrap";
import './auth.scss';


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
        <Form.Check type="radio"
          label="Student"
          value="student"
          name="role" />
        <Form.Check type="radio"
          label="Teacher"
          value="teacher"
          name="role" />

        <Button block bsSize="large" type="submit">
          SignUp
        </Button>
      </Form>

    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.token
});

const mapDispatchToProps = { handleSignUp };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);