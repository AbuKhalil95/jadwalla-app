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
  const [lessonId, setLessonId] = useState('');
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
    props.toggleSession(lessonId, lesson);
    console.log('updated session ------------>   ', props.session);
  }

  const handleChange = async (event) => {
    console.log(event);

    let id =  event.target.value;
    let string = event.nativeEvent.target.childNodes[0].data;
    console.log(id, lessonId, string);

    await setLessonId(id);
    console.log(id, lessonId);
    setLesson(string);
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
    const update = {
      completed: day.completed,
      time: day.time,
    }
    handleUpdateHistory(day.lessonId, update)
  };

  const handleUpdateHistory = async (id, update) => {
    let token = cookie.get('auth');
    let userId = cookie.get('userId');

    // let params = JSON.stringify(sciSchedule);
    const options = {
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Authorization': `Bearer ${token}`,
      'content-type': 'application/json'
      },
    };
    console.log('lesson id being updated >>>>>>>>>>>', id);
  
    let res = await axios.put(`https://jadwalla.herokuapp.com/api/v1/history/owner/${userId}/lesson/${id}`, update, options);
    console.log('response from session', res)
  };

  return (
    <>
      <Button variant="contained" onClick={handleToggle} color={props.session.active ? "secondary" : "primary"} disabled={!lesson}>
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
          value={lessonId}
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