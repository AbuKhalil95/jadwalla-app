import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './chat.scss'


const MyChat = props => {
    let room = 'math'
    let users = ['ahmad', 'osama']
    let oldMassages = [{ username: 'ahmad', time: '9:00', text: 'hello' }, { username: 'ahmad', time: '9:00', text: 'hello' },
    { username: 'ahmad', time: '9:00', text: 'hello' }, { username: 'ahmad', time: '9:00', text: 'hello' }
        , { username: 'ahmad', time: '9:00', text: 'hello' }, { username: 'ahmad', time: '9:00', text: 'hello' }]
    let newMessages = [{ username: 'osama', time: '8:00', text: 'hi' }]

    return (
        <>
            <Container className="chat-room">
                <Row className="px-lg-2 px-3">
                    <Col md="6" xl="2" className="px-0 mb-4 mb-md-0 ">
                        <h3 className="font-weight-bold mb-3 text-lg-left">Room : {room}</h3>
                        <div className="scrollable-chat white z-depth-1 p-3">
                            <Col className="usersList">
                                <h1>Users</h1>
                                {users.map((detail, index) => {
                                    return (
                                        <ListGroup>
                                            <ListGroup.Item className="text-uppercase" variant="success" style={{ width: 'auto' }}>{detail}</ListGroup.Item>
                                        </ListGroup>
                                    )
                                })}
                            </Col>
                        </div>
                    </Col>
                    <Col md="6" xl="8" className="col2 pl-md-3 mt-4 mt-md-0 px-lg-auto">
                        <Row>
                            <Col className="list-unstyled pl-3">
                                <div className="scrollMessage">
                                    {oldMassages.map((detail, index) => {
                                        return (
                                            <Card border="success" style={{ width: 'auto' }} variant="success">
                                                <Card.Body>
                                                    <Card.Title className="text-uppercase" style={{ textAlign: "left" }}>{detail.username}</Card.Title>
                                                    <Card.Text style={{ textAlign: "left" }}>{detail.text}</Card.Text>
                                                    <i style={{ textAlign: "left" }}>{detail.time}</i>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                    {newMessages.map((detail, index) => {
                                        return (
                                            <Card border="primary" style={{ width: 'auto' }} variant="success">
                                                <Card.Body>
                                                    <Card.Title className="text-uppercase" style={{ textAlign: "left" }}>{detail.username}</Card.Title>
                                                    <Card.Text style={{ textAlign: "left" }}>{detail.text}</Card.Text>
                                                    <i style={{ textAlign: "left" }}>{detail.time}</i>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                </div>
                                <li>
                                    <div className="form-group basic-textarea">
                                        <textarea className="form-control pl-2 my-0" id="exampleFormControlTextarea2" rows="3"
                                            placeholder="Type your message here..." />
                                        <Button
                                            color="info"
                                            rounded
                                            size="sm"
                                            className="float-right mt-4"
                                        >
                                            Send           </Button>
                                    </div>
                                </li>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(MyChat);
export default MyChat;