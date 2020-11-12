import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Infographics = props => {
    return (
        < Container className='pt-5 pb-5 infographics'>
            <Row >
                <Col>
                    <h3 className='display-3'>Steps</h3>
                </Col>
            </Row>
            <Row className='pt-5 pb-5 .infographics'>
                <article>
                    <h3>STEP</h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Create an account or sign in if you have one</p>
                </article>
                <article>
                    <h3>STEP</h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Create a template or choose from the existing one</p>
                </article>
                <article>
                    <h3>STEP</h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Start your study session and enter the name of the chapter you need to study</p>
                </article>
                <article>
                    <h3>STEP</h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Go to the Dashboard and see your summary.</p>
                </article>
                <article>
                    <h3>STEP</h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Join the chat room for what subject study and be interactive with your colleges</p>
                </article>
                <article>
                    <h3>STEP</h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Check the motivation letters on your wall from your family and friends</p>
                </article>

            </Row>
        </Container>
    );
};


const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Infographics);