import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import chatHook from '../../hooks/chat/chat';
import Button from 'react-bootstrap/Button';
import "mdbreact/dist/css/mdb.css";
import "./chat.scss";
import { animateScroll } from "react-scroll";
const Chat = (props) => {
    const { _handleSubmit, _handleChange, roomName, usersNames, oldMessages, newMessages } = chatHook(props.socket);
    console.log('usersNames', usersNames);
    useEffect(() => {
        animateScroll.scrollToBottom({
            containerId: "chatCol"
        });
        return () => {
        };
    }, [newMessages]);
    return (
        <Card className="grey lighten-3 chat-room" style={{ minHeight: '100vh' }}>
            <Card.Body>
                <Container className=''>
                    <Row className="d-flex justify-content-center">
                        <Col xs={3} className="pt-0 mb-2 mb-md-0 mr-5">
                            <h6 className="font-weight-bold mb-3 text-lg-left">Room</h6>
                            <ListGroup className="friend-list">
                                <ListGroup.Item
                                    className="d-flex justify-content-between p-2 border-light"
                                >
                                    <div style={{ fontSize: "0.95rem" }}>
                                        <strong className='usersAndRoom'>{roomName}</strong>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <h6 className="font-weight-bold mb-3 text-lg-left mt-3">Active Users</h6>
                            <div className="white z-depth-1 ">
                                <ListGroup className="friend-list">
                                    {usersNames.map((name, indx) => (
                                        <ListGroup.Item key={indx}
                                            className="d-flex justify-content-between p-2 border-light"
                                        >
                                            <div style={{ fontSize: "0.95rem" }}>
                                                <strong className='usersAndRoom'>{name}</strong>
                                            </div>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>

                            </div>
                        </Col>
                        <Col xs={7} className="pl-md-3 px-lg-auto mt-2 mt-md-0   bg-dark">
                            <Row className='pl-3 pt-3'>
                                <ListGroup className="list-unstyled " style={{ width: '100%' }} >
                                    <div className='chatCol' id='chatCol' style={{ width: '100%' }}>
                                        {oldMessages.map(message => (
                                            <ChatMessage key={message.username + message.time} message={message} />
                                        ))}
                                        {newMessages.map(message => (
                                            <ChatMessage key={message.username + message.time} message={message} />
                                        ))}
                                    </div>
                                    <li>
                                        <div className="form-group basic-textarea mt-2 pr-3 pb-3 pl-0 mb-0  justify-content-between">
                                            <form onSubmit={_handleSubmit} style={{
                                                margin: '0', width: '100%', maxWidth: 'none', display: 'inline-block'
                                            }}>
                                                < textarea className="form-control pl-2 my-0" id="exampleFormControlTextarea2" rows="3"
                                                    onChange={_handleChange}
                                                    placeholder="Type your message here..." style={{ display: 'inline-block', width: '80%' }} />
                                                <Button
                                                    color="info"
                                                    rounded
                                                    size="xl"
                                                    className="chatButton "
                                                    type="submit"
                                                >Send</Button></form>
                                        </div>
                                    </li>
                                </ListGroup>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card >
    );
}



const ChatMessage = ({ message: { username, time, text } }) => (
    <li className="chat-message d-flex justify-content-between mb-4"  >
        {/* <MDBAvatar
            tag="img"
            src={avatar}
            alt="avatar"
            circle
            className="mx-2 z-depth-1"
        /> */}
        <Card style={{ width: '90%' }}>
            <Card.Body >
                <div>
                    <strong className="primary-font">{username}</strong>
                    <small className="pull-right text-muted">
                        <i className="far fa-clock ml-1" /> {time}
                    </small>
                </div>
                <hr />
                <p className="mb-0">{text}</p>
            </Card.Body>
        </Card>
    </li>
);

export default Chat;