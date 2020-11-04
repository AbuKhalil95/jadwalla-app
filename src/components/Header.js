/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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



export default Header;
