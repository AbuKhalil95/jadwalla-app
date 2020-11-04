/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Header() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  };

export default Header;