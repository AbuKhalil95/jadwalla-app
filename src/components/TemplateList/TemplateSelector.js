/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { chooseTemplate } from '../../store/template';
import './templateSelector.scss';
import { Card, Button } from "react-bootstrap";
import { createSciTemplate } from './createTemplate.js';
import Divider from '@material-ui/core/Divider';

const TemplateSelector = props => { 

  return (
    <>
    <div className="ctcf" >
      <Card className="card-form">
          <Card.Body>
            <h3>CHOOSE YOUR PLAN</h3>
              <Divider dark /> <br />
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
                        <div className="buttons">
                          <Button onClick={() => createSciTemplate(props.list[index])}>Select</Button>
                          <Button type="button" className="btn btn-info" onClick={() => createSciTemplate(props.list[index])}>Details</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </li>
                  )
                }) : 'null'}
              </ul>
            </Card.Body>
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  list: state.allTemplates,
  history: state.allTemplates,
});

const mapDispatchToProps = { chooseTemplate };

export default connect(mapStateToProps, mapDispatchToProps)(TemplateSelector);