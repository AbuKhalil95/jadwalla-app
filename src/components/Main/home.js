import './home.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';
import { getHistory } from '../../store/history.js';
import { getTemplates } from '../../store/allTemplates.js'
import { getDash } from '../../store/dashboard';
import { getSessions } from '../../store/allSessions';

import Session from '../Session/Session.js';
import Profile from '../profile/profile.js';
import Heatmap from '../profile/heatmap.js';


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
  }, [props.auth, props.history.name])

  return (
    <>

      <div className='sectionGrid'>
        <div className='profile'>
          <Profile/>
        </div>
        <div className='heatmap'>
          <Heatmap/>
        </div>
          <div className='session'>Continue the good progress!<br/><Session/>
        </div>
      </div>  
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  history: state.history,
})

const mapDispatchToProps = { getHistory, getTemplates, getDash, getSessions };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));