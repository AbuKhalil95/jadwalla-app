import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import postSetter from '../../hooks/wall/wallSetter';
const Content = props => {
    const { _handleSubmit, _handleChange, isSent } = postSetter(props.socket);
    useEffect(() => {
        props.socket.close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {
                isSent ? <p>your messege is sent</p> :
                    <Form onSubmit={_handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Leave Honest Words</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={_handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >Submit</Button>
                    </Form>
            }
        </>
    )
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content) 