/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleCourse, handleChapter, setTemp } from '../../store/template';
import { Button, FormGroup, FormControl, FormLabel, Modal, Form , Container, Row, Col} from "react-bootstrap";
import AddCourse from './AddCourse';
import AddChapter from './AddChapter';
import {customizedTemplate} from './createTemplate';
import { Label } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import { withSnackbar } from 'notistack';



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

    const onCourseSubmit = (e) => {
        e.preventDefault();
        const course = {
            name: e.target.name.value,
            expectedHours: Number(e.target.expectedHours.value),
            noOfChapters: Number(e.target.noOfChapters.value),
            isCompleted: false,
            chapters:[],
        };
        props.handleCourse(course);
        handleClose();
      };

      const onChapterSubmit = (e)=> {
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
    };

    const createTemplate = (e) => {
        let template = {
            name: props.name,
            courses: props.courses,
            ownerId: props.ownerId,
        }
        console.log(template);
        if(props.name===''){
            window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
            props.enqueueSnackbar('You should fill all required fields', { variant: 'error' });
        }
        customizedTemplate(template);
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <FormGroup controlId="TEMPLATENAME" bsSize="large">
                    <FormLabel>TEMPLATE NAME</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="tempName"
                        placeholder="TEMPLATE NAME"
                        required
                    />
                </FormGroup>
                <Button type="submit">SET NAME</Button>
            </Form>
            <br/>
                {props.courses ? props.courses.map( (course, i) => {
                    return(
                        <Container key={i}>
                            <Row>
                                <Col>
                                <h5>{course.name}</h5>
                                </Col>
                                <Col>
                                <Button onClick={()=>handleShowCh(i)}>Add Chapter</Button>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                
                                {course.chapters.length > 0 ? course.chapters.map((chapter,j) => {
                                    return(
                                        
                                        <Container key={j}>
                                            <br/> 
                                            <Row>
                                                <Col>
                                                <h6>chapter {j+1} : {chapter.name}</h6>
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
                            <Divider light />
                            <br />
                        </Container>
                        
                    );
                }) : null}

                <Modal show={showCh} onHide={handleCloseCh} >
                            <Modal.Header closeButton>
                                <Modal.Title>Chapter Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Add a new chapter: 
                                <AddChapter onSubmit={onChapterSubmit}/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseCh}>
                                    Close
                                </Button>              
                            </Modal.Footer>
                        </Modal>
                        {/* <h3>Add some courses</h3> */}
                <Button onClick={handleShow}>ADD A COURSE</Button> <br/>



                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Course Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Add a new course: 
                        <AddCourse onSubmit={onCourseSubmit}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>              
                    </Modal.Footer>
                </Modal>
                
                <br/>
                <h3>Are you ready?!</h3> <br/>
                <Button onClick={createTemplate}>CREATE THE NEW TEMPLATE</Button>

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