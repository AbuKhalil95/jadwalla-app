import React from 'react';
import { myWallStyle } from './styles/myWall.scss';
import { connect } from 'react-redux';
import postsGetter from '../../hooks/wall/wallGetter'
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import QRCode from 'qrcode.react';
import ClipBoard from './ClipBoard';
const spinner = <Spinner animation="grow" size="sm" />;
const Content = props => {
    const { posts, newPosts, activateTyping, sharedUrl, postsSpinning } = postsGetter(props.socket);
    return (
        <>
            <Container style={myWallStyle}   >
                <Row className=" justify-content-md-center text-light bg-dark h5" style={{ padding: '20px', height: '70px' }}>
                    {postsSpinning ? <Spinner animation="border" /> : null} <span>My Wall</span>

                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Card style={{ width: '18rem' }} >
                        <Card.Header>Share the link with your <Badge variant="primary">Friends</Badge></Card.Header>
                        <Card.Body>
                            <Row className="justify-content-md-center" >
                                <Col ><QRCode value={sharedUrl} id="qrcode" width="100px" height="100px" /></Col>
                            </Row>
                            <Row className="justify-content-md-center" >
                                <Col className='align-self-center'>  <ClipBoard sharedUrl={sharedUrl} /> </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>

                <Row className="justify-content-md-center">  {activateTyping ?
                    <p>{spinner} {spinner} {spinner}  Someone is typing on your wall</p>
                    : null}
                </Row>
                <Row className="justify-content-md-center mt-5 wrapper clearfix">
                    {newPosts.map((detail, indx) => {
                        return (
                            <Col key={indx} className="mb-5">
                                <aside className={`note-wrap note-${getRandomNumberColor()}`}>
                                    <p>{detail.text}</p>
                                </aside>
                            </Col>
                        )
                    })}
                </Row>
                <Row className="justify-content-md-center mt-3 wrapper clearfix" >
                    {posts.map((detail, indx) => {
                        return (
                            <Col key={indx} className="mb-5" >
                                <aside className={`note-wrap note-${getRandomNumberColor()}`}>
                                    <p>{detail.text}</p>
                                </aside>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
};
function getRandomNumberColor() {
    let colors = ['yellow', 'blue', 'green', 'pink']
    let min = 0;
    let max = 3;
    let colorIndex = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    return colors[colorIndex];
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content) 