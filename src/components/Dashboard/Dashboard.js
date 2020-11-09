/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Timetable from './Timetable.js';

import { Card } from "react-bootstrap";
import './dashboard.scss';

const Dashboard = props => {

  useEffect(() => {

  }, []);

  const variant = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
  ];
  return (
    <>
      <Timetable/>
      <ul className="list-container">
        {props.data.map((course, idx) => {
          return (
            <Card
              bg={variant[idx].toLowerCase()}
              key={idx}
              text={variant[idx].toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>{course.name.toUpperCase()}</Card.Header>
              <Card.Body>
                <Card.Title> PROGRESS : {course.progress} % </Card.Title>
                <Card.Text>
                  TOTAL HOURS : {course.hours}
                </Card.Text>
                <Card.Text>
                  HOURS SPENT : {course.spentHours}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })};
      </ul>

    </>
  );
};

const mapStateToProps = state => ({
  data: state.dashboard.statistics,
  sessions: state.allSessions,
});

export default connect(mapStateToProps)(Dashboard);