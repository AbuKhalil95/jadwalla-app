/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDash } from '../store/dashboard';


function Header(props) {
  return (
    <div className="App">
      <Link to="/dashboard">
        dashboard
      </Link> <br/>
      <Link to="/signup">
        sign up
      </Link> <br/>
      <Link to="/signin">
        sign in
      </Link>
    </div>
  );
};


const mapStateToProps = state => ({
  user: state.auth.userId,
  token: state.auth.token
});

const mapDispatchToProps = { getDash };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
