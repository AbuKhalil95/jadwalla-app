import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const Header = props => {
    return (
        <>
            <Col className="self-align-center text-light p-5" style={{ textAlign: "center" }}>
                <h1 style={{ paddingTop: "20vh" }}>Become your most unstoppable self </h1>
                <p style={{ textAlign: "center" }} className="p-3">Master any subject, one success at a time.</p>
                <Button variant="danger">Get Started</Button>
            </Col>
            <Col>
                <Container className="text-center">
                    <Carousel >
                        <Carousel.Item interval={3000} className='h-75'>
                            <Row className=' text-dark p-1' style={{ 'background-color': '#e9ecef' }}>
                                <Col>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Col>
                            </Row>
                            <img
                                className="d-block w-100"
                                src="https://images.prismic.io/quizlet-prod/15213773-90fa-480b-90cf-64468a8b8441_Carousel_Illo_Bannecker_01.png?auto=compress,format"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <Row className=' text-dark p-1' style={{ 'background-color': '#e9ecef' }}>
                                <Col>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Col>
                            </Row>
                            <img
                                className="d-block w-100"
                                src="https://images.prismic.io/quizlet-prod/f9eae8b6-5716-434f-ba4e-5a4115030f44_Spot_Illustration_Teacher_Bannecker.png?auto=compress,format"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000} >
                            <Row className='text-dark p-1' style={{ 'background-color': '#e9ecef' }}>
                                <Col>
                                    <h3>Third slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Col>
                            </Row>
                            <img
                                className="d-block w-100"
                                src="https://images.prismic.io/quizlet-prod/658f7592-1f7c-4d27-9b39-f79cdba06267_Carousel_Illo_Bannecker_02.png?auto=compress,format"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </Col>
        </>
    );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);