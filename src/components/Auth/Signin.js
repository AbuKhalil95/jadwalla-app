/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleSignIn } from '../../store/auth';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './auth.scss';

const Signin = props => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const signInValues = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    props.handleSignIn(signInValues);
  }
  return (
    <>

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
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>

    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.token
});

const mapDispatchToProps = { handleSignIn };

export default connect(mapStateToProps, mapDispatchToProps)(Signin);