/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleCourse, handleChapter, setTemp } from '../../store/template';
import { Button, FormGroup, FormControl, FormLabel, Modal, Form } from "react-bootstrap";
import AddCourse from './AddCourse';
import AddChapter from './AddChapter';


const TemplateCreator = props => {
console.log(props);
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
            duration: e.target.duration.value,
            state: 'not studied',
        };
        props.handleChapter(idx, chapter);
        handleCloseCh();
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempName = {
            templateName: e.target.tempName.value,
        };
        props.setTemp(tempName);
    };

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
                    />
                </FormGroup>
            </Form>

                {props.courses.map( (course, i) => {
                    return(
                        <div key={i}>
                        <h5>{course.name}</h5>
                        <Button onClick={()=>handleShowCh(i)}>Add Chapter</Button>

                        
                        </div>
                    );
                })}
                <br/>

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

                <Button onClick={handleShow}>ADD A COURSE</Button>



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
                

        </>
    );
};

const mapStateToProps = state => ({
    name: state.template.name,
    courses: state.template.courses,   
});

const mapDispatchToProps = { setTemp, handleCourse, handleChapter };

export default connect(mapStateToProps, mapDispatchToProps)(TemplateCreator);