import './home.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { getHistory } from '../../store/history.js';
import { getTemplates } from '../../store/allTemplates.js'
import { getDash } from '../../store/dashboard';
import { getSessions } from '../../store/allSessions';

import Session from '../Session/Session.js';
import Profile from '../profile/profile.js';
import Heatmap from '../profile/heatmap.js';
import PastSessions from '../Session/historySessions.js';

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
    <div className='homeGrid'>
      <div id='start' className='backgroundImage'/>
      <div className='sectionGrid'>
        <div className='profile'>
          <Profile/>
        </div>
        <div className='heatmap'>
          <Heatmap/>
        </div>
        <div className='session'>
          <Session/>
          {/* <PastSessions/> */}
        </div>
        <div className='blankSpace'>
        </div>
      </div>  
    </div>

  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  history: state.history,
})

const mapDispatchToProps = { getHistory, getTemplates, getDash, getSessions };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));