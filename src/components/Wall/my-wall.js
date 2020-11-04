import React from 'react';
import { connect } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Container, Row , Col } from 'react-bootstrap';



const myWall = props => {



    return (
        <>
            <Container fluid="true" style={{ margin: "20px 100px" }} >
                <Row>
                    <Col className="text-light bg-dark h5" style={{ padding: '20px' }}>
                        Share the Link with your <Badge  variant="primary">Friends</Badge>
                    </Col>
                </Row>
                <Card>
                    <Card.Body></Card.Body>
                </Card>
                <Image src="" thumbnail id="qrcode" width="100px" height="100px" margin-top="15px" />
                <Card>
                    <Card.Body> Leave Honest WORD </Card.Body>
                </Card>
              
            </Container>
        </>
    );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(myWall) 