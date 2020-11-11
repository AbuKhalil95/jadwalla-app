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
                    <h3>Steps</h3>
                </Col>
            </Row>
            <Row className='pt-5 pb-5 .infographics'>
                <article>
                    <h3>Lorem ipsum </h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae fuga impedit repudiandae! Laborum a sequi repudiandae.</p>
                </article>
                <article>
                    <h3>Lorem ipsum </h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae fuga impedit repudiandae! Laborum a sequi repudiandae.</p>
                </article>
                <article>
                    <h3>Lorem ipsum </h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae fuga impedit repudiandae! Laborum a sequi repudiandae.</p>
                </article>
                <article>
                    <h3>Lorem ipsum </h3>
                    {/* <h4>Lorem ipsum</h4> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae fuga impedit repudiandae! Laborum a sequi repudiandae.</p>
                </article>
            </Row>
        </Container>
    );
};


const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Infographics);