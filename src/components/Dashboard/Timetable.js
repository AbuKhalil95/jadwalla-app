import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';

const Timetable = (props) => {
  const [lastUid, setLastUid] = useState(4);
  const [selectedIntervals, setInterval] = useState([{
    uid: 1,
    start: moment({h: 10, m: 5}),
    end: moment({h: 12, m: 5}),
    value: "Booked by Smith"
  },
  {
    uid: 2,
    start: moment({h: 13, m: 0}).add(2,'d'),
    end: moment({h: 13, m: 45}).add(2,'d'),
    value: "Closed"
  },
  {
    uid: 3,
    start: moment({h: 11, m: 0}),
    end: moment({h: 14, m: 0}),
    value: "Reserved by White"
  }]);

  // const handleEventRemove = (event) => {
  //   const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
  //   if (index > -1) {
  //     selectedIntervals.splice(index, 1);
  //     setInterval({selectedIntervals});
  //   }
  // }
  
  // const handleEventUpdate = (event) => {
  //   const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
  //   if (index > -1) {
  //     selectedIntervals[index] = event;
  //     setInterval({selectedIntervals});
  //   }
  // }
  
  const handleSelect = (newIntervals) => {
    const intervals = newIntervals.map( (interval, index) => {

      return {
        ...interval,
        uid: lastUid + index
      }
    });

    setInterval(selectedIntervals.concat(intervals));
    setLastUid(lastUid + newIntervals.length);
  } 
  
  const convertPropsToIntervals = (sessions) => {
    console.log('All sessions in timetable', sessions);
    const intervals = sessions.map((session, index) => {
      return {
        uid: index + 1,
        start: moment(session.date),
        end: moment(session.date).add(session.time + 1000000, 'seconds'),
        value: `${session.lessonId} \n  ${session.completed*100}% in ${session.time} seconds`
      }
    });
    setInterval(intervals);
  }

  useEffect(()=> {
    setInterval([]);
    convertPropsToIntervals(props.sessions);
  }, [props.sessions]);

  return <>
    <WeekCalendar
      scaleUnit = {60}
      numberOfDays = {7}
      selectedIntervals = {selectedIntervals}
      onIntervalSelect = {handleSelect}
      // onIntervalUpdate = {handleEventUpdate}
      // onIntervalRemove = {handleEventRemove}
    />
  </>
}

const mapStateToProps = state => ({
  data: state.dashboard.statistics,
  sessions: state.allSessions,
});

export default connect(mapStateToProps)(Timetable);