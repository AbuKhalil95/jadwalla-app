/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import TemplateList from './TemplateList'

import { createSciTemplate } from './createTemplate';
import { createLitTemplate } from './createTemplate';
import './templateSelector.scss';

import { Button } from "react-bootstrap";

const TemplateSelector = props => { 

  return (
    <>
      <h2>With JADWALEH, track your day-to-day study timetable</h2>
      <h3>CHOOSE YOUR PLAN</h3>
      {console.log(props.templates)}
      <ul className="list-container">
        <TemplateList/>
      </ul>
    </>
  );
};

export default TemplateSelector;