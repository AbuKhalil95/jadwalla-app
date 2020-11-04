import React, { useState } from 'react';
import { connect } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import QRCode from 'qrcode.react';



const MyWall = props => {
    const posts = [{ text: "hello world", time: "9:00" }, { text: "hello Ahmad", time: "9:00" }, { text: "hello Osama", time: "9:00" }, { text: "hello Yahya", time: "9:00" }]
    const [newPosts, setNewPost] = useState([{ text: "hello world", time: "9:00" }, { text: "hello Ahmad", time: "9:00" }, { text: "hello Osama", time: "9:00" }, { text: "hello Yahya", time: "9:00" }])
    const sharedUrl = 'www.habrawi.com';
    const activateTyping = true;


    return (
        <>
            <Container fluid="true" style={{ margin: "20px 100px" }} >
                {activateTyping ? <p>Someone is typing</p> : null}
                <Row>
                    <Col className="text-light bg-dark h5" style={{ padding: '20px' }}>
                        Share the Link with your <Badge variant="primary">Friends</Badge>
                    </Col>
                </Row>
                <Card>
                    <Card.Body>{sharedUrl}</Card.Body>
                </Card>
                <QRCode value={sharedUrl} thumbnail id="qrcode" width="100px" height="100px" margin-top="15px" />
                <h1>New</h1>
                <CardGroup variant="danger" className="mb-3 card_container">
                    {newPosts.map((detail, index) => {
                        return (
                            <Card variant="danger" className="mr-2 card_item" key={index} >
                                <Card.Body variant="danger" >
                                    <Card.Text>{detail.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardGroup>

                <h1>Old</h1>
                <CardGroup variant="danger" className="card_container">
                    {posts.map((detail, index) => {
                        return (
                            <Card variant="danger" className="mr-2 card_item" key={index} >
                                <Card.Body variant="danger" >
                                    <Card.Text>{detail.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardGroup>




            </Container>
        </>
    );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyWall) 