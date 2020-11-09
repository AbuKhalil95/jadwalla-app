import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';

import { getHistory } from '../../store/history.js';
import { getTemplates } from '../../store/allTemplates.js'
import { getDash } from '../../store/dashboard';
import { getSessions } from '../../store/allSessions';

import Session from '../Session/Session.js';

const Home = props => {
  const [auth, setAuth] = React.useState(false);

  useEffect(() => {
    console.log('changing auth')
    setAuth(props.auth ? true : false);
    props.getHistory();
    props.getTemplates();
    props.getDash();
    props.getSessions();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.auth])


  return (
    <>
    {console.log(props.auth)}
      <div>This is a guide pre login {props.auth.username || 'non-logged'}</div>
      <div>This is guide shown only once after login {props.auth.username}</div>
      <div>This is not a guide, but a homepage to start / continue</div>
      {auth ? (
        <>
          <Link to='./create-template'>
            <Button variant="contained" color="primary">CREATE YOUR OWN TEMPLATE</Button> 
          </Link>
          <Link to='./select-template'>
            <Button variant="contained" color="primary">CHOOSE FROM OTHER TEMPLATES</Button> 
          </Link>
          <Session/>     
        </>
        ) : null}      
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  history: state.history,
})

const mapDispatchToProps = { getHistory, getTemplates, getDash, getSessions };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));