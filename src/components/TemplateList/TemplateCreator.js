/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleCourse, handleChapter, setTemp } from '../../store/template';
import { Button, FormGroup, FormControl, FormLabel, Modal, Form } from "react-bootstrap";
import AddCourse from './AddCourse';
import AddChapter from './AddChapter';
import {customizedTemplate} from './createTemplate';
import { Label } from '@material-ui/icons';


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
                    />
                </FormGroup>
                <Button type="submit">SET NAME</Button>
            </Form>

                {props.courses ? props.courses.map( (course, i) => {
                    return(
                        <div key={i}>
                        <h5>{course.name}</h5>
                        <Button onClick={()=>handleShowCh(i)}>Add Chapter</Button>
                        </div>
                    );
                }) : null}
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
                        <h3>Add some courses</h3>
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
                
                <br/>
                <h3>Are you ready?!</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplateCreator);