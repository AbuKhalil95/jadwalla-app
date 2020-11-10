import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Features from './Features';
import Infographics from './Infographics';
import features from './features.scss';
import infographics from './infographics.scss';
const Home = props => {
    return (
        <>
            <Container fluid >
                <Row className=' bg-dark p-5'>
                    <Header />
                </Row>
                <Row style={{ features }}>
                    <Features />
                </Row>
                <Row style={{ infographics }}>
                    <Infographics />
                </Row>
            </Container>
        </>
    );
};
const mapStateToProps = state => ({
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);