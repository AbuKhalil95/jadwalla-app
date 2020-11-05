import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';
import { toggleSession } from '../../store/session';


const Home = props => {
  const [auth, setAuth] = React.useState(props.auth.username);

  const handleToggle = () => {
    props.toggleSession("dummy");
  }

  useEffect(() => {
    console.log('changing auth')
    setAuth(props.auth.username ? true : false);
  }, [props.auth.username, auth])


  return (
    <>
      <div>This is a guide pre login {props.auth.username || 'non-logged'}</div>
      <div>This is guide shown only once after login {props.auth.username}</div>
      <div>This is not a guide, but a homepage ? dashboard</div>
      {auth ? (
        <Button variant="contained" onClick={handleToggle} color={props.isActiveSession? "secondary" : "primary"}>
          {props.isActiveSession ? ("END") : ("START")}
        </Button>) : null}
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  isActiveSession: state.session.active,
})

const mapDispatchToProps = { toggleSession };

export default (connect(mapStateToProps, mapDispatchToProps)(Home));