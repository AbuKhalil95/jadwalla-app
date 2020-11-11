/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import MenuButton from './common/menuButton';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AlarmIcon from '@material-ui/icons/Alarm';
import TableChartIcon from '@material-ui/icons/TableChart';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FaceIcon from '@material-ui/icons/Face';
import cookie from 'js-cookie';
import { handleLogOut } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(props.auth.username);

  const logOut = async (e) => {
    e.preventDefault();
    setAuth(null);
    await props.handleLogOut();
    return <Redirect to="/" />

  }
  useEffect(() => {
    setAuth(cookie.get('userId') ? cookie.get('userId') : null);
  }, []);
  useEffect(() => {
    setAuth(cookie.get('userId') ? cookie.get('userId') : null);
  }, [props.auth]);

  return (
    <header className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <IconButton color="inherit" aria-label="Logo">
              <TableChartIcon />
            </IconButton>
            Jadwalla
          </Typography>
          <div style={{ display: 'flex' }}>
            <IconButton color="inherit" aria-label="Home Page" component={Link} to={'/'}>
              <HomeIcon />
            </IconButton>
            {auth && (
              <>
                <MenuButton iconType={NotificationsNoneIcon} type={'notifications'} content={['One Notif']} />
                <MenuButton iconType={AccountCircleIcon} type={'profile'}
                  content={[['Profile', '/profile'], ['My Wall', '/myWall'], ['Chat', '/Chat'], ['Dashboard', '/dashboard'], ['Settings', '/settings']]} />
              </>
            )}
          </div>
          <div>
            {console.log(auth)}
            {auth ? (
              <IconButton color="inherit" aria-label="Logout" component={Link} to={'/'} onClick={logOut}>
                <LockIcon />
              </IconButton>) : (
                <IconButton color="inherit" aria-label="Login" component={Link} to={'/signin'}>
                  <LockOpenIcon />
                </IconButton>
              )}

          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = { handleLogOut };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header)); 
