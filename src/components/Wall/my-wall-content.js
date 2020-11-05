import React from 'react';
import { connect } from 'react-redux';
import postsGetter from '../../hooks/wall/wallGetter'
import Badge from 'react-bootstrap/Badge';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import QRCode from 'qrcode.react';
const Content = props => {
    const { posts, newPosts, activateTyping, sharedUrl } = postsGetter(props.socket);
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
                <QRCode value={sharedUrl} id="qrcode" width="100px" height="100px" margin-top="15px" />

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

export default connect(mapStateToProps, mapDispatchToProps)(Content) 