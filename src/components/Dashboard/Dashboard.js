/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDash } from '../../store/dashboard';

const Dashboard = props => {
  useEffect(() => {
    props.getDash();
  }, []);

  return (
    <>
      {props.data.map((course, i) => {
        return (
          <div key={i}>
            <h2>name {course.name}</h2>
            <h3>hours {course.hours}</h3>
            <h3>spent hours{course.spentHours}</h3>
            <h3>progress{course.progress}</h3>
          </div>
        );
      })}

    </>
  );
};

const mapStateToProps = state => ({
  data: state.dashboard.statistics
});

const mapDispatchToProps = { getDash };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);