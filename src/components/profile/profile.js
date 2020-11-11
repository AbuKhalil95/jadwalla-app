import './profile.css'
import React from 'react';
import { connect } from 'react-redux';

import { Link, withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';
const Profile = (props) => {

  return (
    <div className='userCard'>
      <div className='userProfile'/>
      <div className='username'>{props.username}</div>
      <div className='userHistory'>{props.history.name ? props.history.name : 'New User!'}</div>
      <div className='userStart'>{props.history.name ? 'Started at: ' + props.history.startDate : null}</div>
      <Link disabled={props.history.name ? true : false} to='./create-template'>
        <Button variant="contained" color="primary" disabled={props.history.name ? true : false}>CREATE</Button> 
      </Link>
      <Link disabled={props.history.name ? true : false} to='./select-template'>
        <Button variant="contained" color="primary" disabled={props.history.name ? true : false}>CHOOSE</Button> 
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  username: state.auth.username,
  history: state.history,
});

export default withRouter(connect(mapStateToProps)(Profile));