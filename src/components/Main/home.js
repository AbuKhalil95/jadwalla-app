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
import { Card, Button } from "react-bootstrap";
import Divider from '@material-ui/core/Divider';

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
    <div className="ctcfH" >
      <div id='start' className='backgroundImage'/>
      <Card className="card-formH">
        <div className='homeGrid'>
          <div className='sectionGrid'>
            <div className='title'>
              <h1>PROFILE</h1>
              <Divider dark />
            </div>
            <div className='profile'>
              <Profile/>
            </div>
            <div className='heatmap'>
              <Divider dark />
              <Heatmap/>
            </div>
            <div className='session'>
              <Session/>
            </div>
            <div className='allSession'>
              <PastSessions/>
            </div>
            {/* <div className='blankSpace'>
            </div> */}
          </div>  
        </div>
      </Card>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  history: state.history,
})

const mapDispatchToProps = { getHistory, getTemplates, getDash, getSessions };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));