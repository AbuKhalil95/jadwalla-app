import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100ch',
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const AllSession = props => {
  const [sessions, setSessions] = useState([]);
  const classes = useStyles();

  const sortSessions = () => {
    if (sessions.length > 0) {
      sessions.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
      });
    }
  } 

  useEffect(() => {
    setSessions(props.sessions);
  }, [props.sessions])

  return (
    <List className={classes.root}>
      <h3>{sessions.length > 0 ? 'Past Sessions' : 'No Activity Yet!'}</h3>
      <Divider dark />
      {sortSessions()}
      {sessions.length > 0 ? sessions.map(session => {
        return (<>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={session.lesson} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText 
            primary={session.lesson}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {`${parseInt(session.completed*100)}% Progress added`}
                  <br/>
                </Typography>
                {moment(session.date).format('dddd MMMM D Y')}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" /></>);
      }) : null}
    </List>
  );
}

const mapStateToProps = state => ({
  sessions: state.allSessions,
  history: state.history,
})

export default connect(mapStateToProps)(AllSession);
