/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect , useState} from 'react';
import { connect } from 'react-redux';
import {getDash} from '../../store/dashboard';
import Timetable from './Timetable.js';
import { Card } from "react-bootstrap";
import { withSnackbar } from 'notistack';
import './dashboard.scss';

const Dashboard = props => {

  const [count, setCount] = useState(0);
  
  useEffect(async() => {
    await props.getDash();
  }, []);

  if(props.total>0 && count === 0){
      const noti = setTimeout(async () => {
      window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
      await props.enqueueSnackbar(`Hey Champ, You have a total progress of ${props.total} %, Good Job!`, { variant: 'info' });
    }, 4000);

    setCount(1);

    setTimeout(() => {
      clearTimeout(noti);
    },4500)
    
  }

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
      {/* <Timetable/> */}
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
        })}
      </ul>

    </>
  );
};

const mapStateToProps = state => ({
  data: state.dashboard.statistics,
  total: state.dashboard.total,
});

const mapDispatchToProps = { getDash};

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Dashboard));
