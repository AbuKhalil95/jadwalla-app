/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { createSciTemplate } from './createTemplate';
import { createLitTemplate } from './createTemplate';
import { Card, Button } from "react-bootstrap";
import './templateSelector.scss';

const TemplateSelector = props => {

  // useEffect(() => {
  //   props.get();
  // }, []);

  return (
    <>
      <h2>With JADWALEH, track your day-to-day study timetable</h2>
      <h3>CHOOSE YOUR PLAN</h3>
      <ul className="list-container">
        <li>
          <Card
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>SCIENTIFIC STREAM</Card.Header>
            <Card.Body>
              <Card.Text>
              Organize your daily tasks, following our plan for scientific stream students.
              </Card.Text>
              <Button onClick={createSciTemplate}>CHOOSE THIS TEMPLATE</Button>
            </Card.Body>
          </Card>
        </li>

        <li>
          <Card
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>LITERARY STREAM</Card.Header>
            <Card.Body>
              <Card.Text>
              Organize your daily tasks, following our plan for literary stream students.
              </Card.Text>
              <Button onClick={createLitTemplate}>CHOOSE THIS TEMPLATE</Button>
            </Card.Body>
          </Card>
        </li>
      </ul>

      <Link to="/create-template"><Button>
       CREATE YOUR OWN TEMPLATE
        </Button></Link>

    </>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateSelector);