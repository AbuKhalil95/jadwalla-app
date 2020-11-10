import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
const Features = props => {
    return (
        < Container className='pt-5 pb-5'>
            <Row >
                <Col>
                    <h3>Jadwalla Features</h3>
                </Col>
            </Row>
            <Row className='pt-5 pb-5'>
                <Col>
                    <Accordion >
                        <Card>
                            <Accordion.Toggle className='toggleButton' eventKey="0">
                                <div>
                                    <div class="PrismicTopicSubject PrismicTopicSubject--Languages" style={{ backgroundImage: 'url(https://assets.quizlet.com/a/i/homepage/topics/other.67db08f4bd869cc.png)' }}>
                                        <span className='featureSpan firstFeature'>Study <br /> Planner</span>
                                    </div>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, tempore repellendus? Eaque corporis architecto .</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Col>
                <Col>
                    <Accordion >
                        <Accordion.Toggle className='toggleButton' eventKey="0">
                            <div>
                                <div class="PrismicTopicSubject PrismicTopicSubject--Languages" style={{ backgroundImage: 'url(https://assets.quizlet.com/a/i/homepage/topics/languages.9c9dca2a73c4e12.png)' }}>
                                    <span className='featureSpan'>Chat</span>
                                </div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, tempore repellendus? Eaque corporis architecto .</p>
                        </Accordion.Collapse>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion >
                        <Accordion.Toggle className='toggleButton' eventKey="0">
                            <div>
                                <div class="PrismicTopicSubject PrismicTopicSubject--Languages" style={{ backgroundImage: 'url(https://assets.quizlet.com/a/i/homepage/topics/other.67db08f4bd869cc.png)' }}>
                                    <span className='featureSpan firstFeature'>Study <br /> Planner</span>
                                </div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, tempore repellendus? Eaque corporis architecto .</p>
                        </Accordion.Collapse>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};


const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Features);