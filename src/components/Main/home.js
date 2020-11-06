import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';
import { toggleSession } from '../../store/session';
import { getHistory } from '../../store/history.js';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Home = props => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(props.auth.username);
  const [lesson, setLesson] = React.useState('');

  const handleToggle = () => {
    props.toggleSession("dummy");
  }

  const handleChange = (event) => {
    setLesson(event.target.value);
  };

  useEffect(() => {
    console.log('changing auth')
    setAuth(props.auth.username ? true : false);
    props.getHistory();
  }, [props.auth.username, auth])


  return (
    <>
      <div>This is a guide pre login {props.auth.username || 'non-logged'}</div>
      <div>This is guide shown only once after login {props.auth.username}</div>
      <div>This is not a guide, but a homepage ? dashboard</div>
      {auth ? (
        <>
          <br/>
          Started at {props.history.startDate}
          <br/>
          {props.history.name}
          <br/>
          <Button variant="contained" onClick={handleToggle} color={props.isActiveSession? "secondary" : "primary"}>
            {props.isActiveSession ? ("END") : ("START")}
          </Button>
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
                    <MenuItem value={props.history.courses.length*indexE + index} key={index}>{props.history.courses[indexE].name + ': ' + chapter.name}</MenuItem>
                  )
                })
              })}
            </Select>
          </FormControl>
        </>
        ) : null}
      
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  isActiveSession: state.session.active,
  history: state.history,
})

const mapDispatchToProps = { toggleSession, getHistory };

export default (connect(mapStateToProps, mapDispatchToProps)(Home));