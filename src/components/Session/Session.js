import axios from 'axios';
import cookie from 'js-cookie';

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleSession } from '../../store/session';

import AddComplete from './AddComplete.js';

import { Button, Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';
import { Modal } from "react-bootstrap";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Session = props => {
  const classes = useStyles();
  const [lesson, setLesson] = useState('');
  const [time, setTime] = useState(0)
  // modal functions
  const [showCh, setShowCh] = useState(false);
  const handleCloseCh = () => setShowCh(false);
  const handleShowCh = () => setShowCh(true);

  const handleToggle = () => {
    if (props.session.active) {
      setTime((Math.floor(new Date() - props.session.day.date)/1000));
      console.log('seconds passed', time);

      handleShowCh();
    }
    props.toggleSession(lesson);
    console.log('updated session ------------>   ', props.session);
  }

  const handleChange = (event) => {
    setLesson(event.target.value);
  };

  const onSessionSubmit = async (e)=> {
    e.preventDefault();
    const todaySession = props.session.day;
    todaySession.completed = e.target.completed.value/100;
    todaySession.time = e.target.time.value || time;
    await handleAddSession(todaySession);
    handleCloseCh();
  };

  const handleAddSession = async (day) => {
    let token = cookie.get('auth');
    // let params = JSON.stringify(sciSchedule);
    const options = {
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Authorization': `Bearer ${token}`,
      'content-type': 'application/json'
      },
    };
    console.log('day >>>>>>>>>>>', day);
  
    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/weekly`, day, options);
    console.log('response from session', res)
  };

  return (
    <>
      <br/>
        Started at {props.history.startDate}
      <br/>
        {props.history.name}
      <br/>
      <Button variant="contained" onClick={handleToggle} color={props.session.active? "secondary" : "primary"}>
        {props.session.active ? ("END") : ("START")}
      </Button>

      <Modal show={showCh} onHide={handleCloseCh} >
        <Modal.Header closeButton>
            <Modal.Title>Session Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>How was your session?
            <AddComplete onSubmit={onSessionSubmit} time={time}/>
        </Modal.Body>
        <Modal.Footer>
            <Button color="secondary" onClick={handleCloseCh}>
                Close
            </Button>              
        </Modal.Footer>
      </Modal>


      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Lesson</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={lesson}
          onChange={handleChange}
          label="Lesson"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {props.history.courses.map((course, indexE) => {
            return course.chapters.map((chapter, index) => {
              return (
                <MenuItem value={chapter._id} key={index}>{props.history.courses[indexE].name + ': ' + chapter.name}</MenuItem>
              )
            })
          })}
        </Select>
      </FormControl>
    </>
  )
}

const mapStateToProps = state => ({
  session: state.session,
  history: state.history,
})

const mapDispatchToProps = { toggleSession };

export default connect(mapStateToProps, mapDispatchToProps)(Session);