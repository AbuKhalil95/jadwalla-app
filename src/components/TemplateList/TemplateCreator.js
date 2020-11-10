/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleCourse, handleChapter, setTemp } from '../../store/template';
import { Button, FormGroup, FormControl, FormLabel, InputGroup, Modal, Form, Container, Row, Col, Card } from "react-bootstrap";
import AddCourse from './AddCourse';
import AddChapter from './AddChapter';
import { customizedTemplate } from './createTemplate';
import { Label } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import { withSnackbar } from 'notistack';
import './templateSelector.scss';

const TemplateCreator = props => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showCh, setShowCh] = useState(false);
    const handleCloseCh = () => setShowCh(false);
    const handleShowCh = (i) => {
        setShowCh(true);
        setIdx(i);
    }

    const [idx, setIdx] = useState(0);
    const [enable, setEnable] = useState(true);

    const onCourseSubmit = (e) => {
        e.preventDefault();
        const course = {
            name: e.target.name.value,
            expectedHours: Number(e.target.expectedHours.value),
            noOfChapters: Number(e.target.noOfChapters.value),
            isCompleted: false,
            chapters: [],
        };
        props.handleCourse(course);
        handleClose();

    };

    const onChapterSubmit = (e) => {
        e.preventDefault();
        const chapter = {
            name: e.target.name.value,
            duration: Number(e.target.duration.value),
            state: 'not-studied',
        };
        props.handleChapter(idx, chapter);
        handleCloseCh();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTemp(e.target.tempName.value);
        setEnable(false);
    };

    const createTemplate = (e) => {
        let template = {
            name: props.name,
            courses: props.courses,
            ownerId: props.ownerId,
        }
        console.log(template);
        if (props.name === '' || props.courses.length === 0) {
            window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
            props.enqueueSnackbar('You should fill all required fields', { variant: 'error' });
        }
        else customizedTemplate(template);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h3>TEMPLATE DETAILS</h3>
                    <Divider darker /> <br/>
                    <div className="instructions">
                        Jadwaleh gives you the ability to create and publish a customized template, where you can
                        share your study plan with other students with the same background. In order to create a new 
                        template that matches your needs and interests you should follow the following steps: <br/>
                        1. Choose a unique name for your template and make sure that it is set. <br/>
                        2. Add Course/s and Chapter/s that matches you area of study. <br/>
                    </div> <br/> <br/>
                    <Form onSubmit={handleSubmit} inline className={'nameForm'}>
                        <Form.Group as={Row} controlId="TEMPLATENAME">
                            <Form.Label column sm="4">
                                Template Name*
                            </Form.Label>
                            <Col sm="8">
                                <InputGroup className="mb-3" bsSize="large">
                                    <FormControl
                                        autoFocus
                                        type="text"
                                        name="tempName"
                                        placeholder="TEMPLATE NAME"
                                        required
                                    />
                                    <InputGroup.Append>
                                        <Button type="submit" variant="outline-primary">SET</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Group>

                    </Form>
                    <br />
                    <Button className="submit" variant="dark" onClick={handleShow}>ADD A COURSE</Button>
                            <Button className="submit" disabled={enable} onClick={createTemplate}>CREATE TEMPLATE</Button>
                    {props.courses ? props.courses.map((course, i) => {
                        return (
                            <Card>
                                <Container key={i}>
                                    <Row>
                                        <Col>
                                            <h5>{course.name}</h5>
                                        </Col>
                                        <Col>
                                            <Button variant="link" onClick={() => handleShowCh(i)}>Add Chapter</Button>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>

                                        {course.chapters.length > 0 ? course.chapters.map((chapter, j) => {
                                            return (

                                                <Container key={j}>
                                                    <br />
                                                    <Row>
                                                        <Col>
                                                            <h6>chapter {j + 1} : {chapter.name}</h6>
                                                        </Col>
                                                        <Col>
                                                            <h6>Estimated Time : {chapter.duration} hrs</h6>
                                                        </Col>
                                                    </Row>
                                                    <Divider light />
                                                </Container>

                                            );

                                        }) : null}
                                    </Row>
                                    <Divider darker />
                                    <br />
                                </Container>
                            </Card>

                        );
                    }) : null}

                    <Modal show={showCh} onHide={handleCloseCh} >
                        <Modal.Header closeButton>
                            <Modal.Title>Chapter Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Add a new chapter:
                                <AddChapter onSubmit={onChapterSubmit} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseCh}>
                                Close
                                </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Course Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Add a new course:
                        <AddCourse onSubmit={onCourseSubmit} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <br />
 
                        {/* <Row className="text-center"> */}
                            
                        {/* </Row> */}
                    </Card.Body>
            </Card>
        </>
    );
};

const mapStateToProps = state => ({
    name: state.template.name,
    courses: state.template.courses,
    ownerId: state.template.ownerId,
});

const mapDispatchToProps = { setTemp, handleCourse, handleChapter };

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(TemplateCreator));