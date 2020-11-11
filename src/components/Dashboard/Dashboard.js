/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Timetable from './Timetable.js';
import Calender from './Calender2.js'
import { Card } from "react-bootstrap";
import './dashboard.scss';
import { priorities } from './data.js';
import { getDash } from '../../store/dashboard';
import { getSessions } from '../../store/allSessions';
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  addButton: {
    position: "absolute",
    top: '15vh',
    right: '10vh'
  }
}));

const Dashboard = props => {
  const [sessions, setSessions] = useState([]);
  const classes = useStyles();
  const [show, setShow] = useState(true);

  const convertToSessions = (sessions) => {
    console.log('All sessions in timetable', sessions);

    if (sessions && sessions.length > 0) {
      const modSessions = sessions.map((session, index) => {
        let start = new Date(session.date);
        console.log(' from start', start);
        console.log(' a sessions in timetable', start.getTime(), session.time);
        console.log(' Added session', new Date(start.getTime() + session.time));
        let prioColor;
        priorities.forEach(subject => {
          if (session.lesson.toLowerCase().includes(subject.text.toLowerCase())) {
            prioColor = subject.id;
          }
        })

        return {
          id: index,
          startDate: new Date(new Date(session.date).getTime()),
          endDate: new Date(start.getTime() + session.time),
          title: `${session.lesson} \n  ${session.completed*100}% in ${session.time} seconds`,
          priorityId: prioColor,
        }
      });
      
      console.log('inserting into calendar', modSessions);
      setSessions(modSessions);
    }
  }
  useEffect(() => {
    props.getDash();
    props.getSessions();
    convertToSessions(props.sessions);

  }, []);
  
  useEffect(() => {
    convertToSessions(props.sessions);
  }, [props.sessions]);

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
      {/* <Calender data={sessions}/> */}
      <div style={{display: show ? 'block' : 'none'}}>
        <Calender data={sessions} />
      </div>
      <Fab
          color="secondary"
          className={classes.addButton}
          onClick={() => setShow(!show)}
        >
          <AddIcon />
        </Fab>
      {/* <Timetable/> */}
      <ul className="list-container">
        {props.data.length > 0 ? props.data.map((course, idx) => {
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
          )
        }) : null}
      </ul>

    </>
  );
};

const mapStateToProps = state => ({
  data: state.dashboard.statistics,
  sessions: state.allSessions,
});

const mapDispatchToProps = { getDash, getSessions };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);