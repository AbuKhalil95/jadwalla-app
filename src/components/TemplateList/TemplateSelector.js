/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { chooseTemplate } from '../../store/template';

import { createSciTemplate } from './createTemplate';
import { createLitTemplate } from './createTemplate';
import './templateSelector.scss';
import { Card, Button } from "react-bootstrap";


// let historyTemplate = chosenTemplate.toObject();      // cant create new mongoose entry before 
//       chosenTemplate = await history.create(historyTemplate);
const TemplateSelector = props => { 

  return (
    <>
      <h2>With JADWALEH, track your day-to-day study timetable</h2>
      <h3>CHOOSE YOUR PLAN</h3>
      {console.log(props.templates)}
      <ul className="list-container">
        {props.list.length > 0 ? props.list.map((card, index) => {
          return (
            <li key={index}>
              <Card style={{ width: '18rem' }} className="mb-2">
                <Card.Header>{card.name.toUpperCase()}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {card.description}
                  </Card.Text>
                  <Button onClick={() => {alert('data')}}>CHOOSE THIS TEMPLATE</Button>
                </Card.Body>
              </Card>
            </li>
          )
        }) : 'null'}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  list: state.allTemplates,
  history: state.allTemplates,

});

const mapDispatchToProps = { chooseTemplate };

export default connect(mapStateToProps, mapDispatchToProps)(TemplateSelector);