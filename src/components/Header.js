/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

// function Header() {
//   return (
//     <div className="App">
//       <Link to="/dashboard">
//         dashboard
//       </Link> <br/>
//       <Link to="/signup">
//         sign up
//       </Link> <br/>
//       <Link to="/signin">
//         sign in
//       </Link>
//     </div>
//   );
// };


import React from "react";
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
  const [auth, setAuth] = React.useState(true);

  const handleLogin = (event) => {
    setAuth(!auth);
  };

  return (
    <header className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <MenuButton iconType={NotificationsNoneIcon} type={'notifications'} content={['One Notif']} />
          <Typography variant="h6" className={classes.title}>
            <IconButton color="inherit" aria-label="Logo">
              <TableChartIcon/>
            </IconButton>
            Jadwalla
          </Typography>
          <div style={{display: 'flex'}}>
          <IconButton color="inherit" aria-label="Home Page" component={Link} to={'/'}>
            <HomeIcon/>
          </IconButton>
          {auth && (
            <>
              <MenuButton iconType={AccountCircleIcon} type={'profile'} 
              content={[['Profile','/profile'], ['Dashboard','/dashboard'], ['Settings','/settings']]}/>
            </>
          )}
          </div>
          <div onClick={handleLogin}>
            {auth ? (
            <IconButton color="inherit" aria-label="Logout" component={Link} to={'/cart'}>
              <LockIcon/>
            </IconButton>) : (
               <IconButton color="inherit" aria-label="Login" component={Link} to={'/signin'}>
               <LockOpenIcon/>
             </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default withRouter(connect(mapStateToProps)(Header)); 
