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
      <hr/>
      <div className='userHistory'><b>{props.history.name ? props.history.name : 'No History Yet!'}</b></div>
      <div className='userStart' style={{color: '#888888'}}>{props.history.name ? 'Started at: ' + props.history.startDate : null}</div>
      <hr/>
      <div className="buttons">
        <Link disabled={props.history.name ? true : false} to='./create-template'>
          <Button variant="contained" color="primary" disabled={props.history.name ? true : false}>CREATE</Button> 
        </Link>
        <Link disabled={props.history.name ? true : false} to='./select-template'>
          <Button variant="contained" color="primary" disabled={props.history.name ? true : false}>CHOOSE</Button> 
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  username: state.auth.username,
  history: state.history,
});

export default withRouter(connect(mapStateToProps)(Profile));