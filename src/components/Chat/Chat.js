import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Redirect } from "react-router-dom";
const Chat = props => {
  const [redirect, setRedirect] = useState(false);
  const [subject, setSubject] = useState('');
  const _handleSubmit = (e) => {
    e.preventDefault();
    setSubject(e.target.subject.value);
    setRedirect(true);
  };
  return (
    <>
      {redirect && <Redirect to={'/mychat?room=' + subject} />}
      <Container >
        <Row className=" justify-content-md-center mb-5 text-light bg-dark h5" style={{ padding: '20px', height: '70px' }}>
          <span>Chat </span>
        </Row>
        <Row className=" justify-content-md-center " >
          <Card style={{ width: '20rem' }} >
            <Card.Header>Pick a subject to enter a chatting room</Card.Header>
            <Card.Body>
              <Form onSubmit={_handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control name='subject' as="select" custom required>
                    <option value='Arabic'>Arabic</option>
                    <option value='Math'>Math</option>
                    <option value='English'>English</option>
                    <option value='Physics'>Physics</option>
                    <option value='Biology'>Biology</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Join Chat</Button>
              </Form>
            </Card.Body>
          </Card>

        </Row>
      </Container >


    </>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);