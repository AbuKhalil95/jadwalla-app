/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Chat = props => {

  return (
    <>
      <Form>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Chose the Subject Chat </Form.Label>
          <Form.Control as="select" custom>
            <option>Arabic</option>
            <option>Math</option>
            <option>English</option>
            <option>Physics</option>
            <option>Biology</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Join Chat</Button>

      </Form>

    </>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);