import React from 'react';
import { Button, FormGroup, FormControl, FormLabel,  Form } from "react-bootstrap";

const AddCourse = props => {

    return (
        <>

            <Form onSubmit={props.onSubmit} >
                <FormGroup controlId="CHAPTERNAME" bsSize="large">
                    <FormLabel>CHAPTER NAME</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="name"
                        placeholder="CHAPTER NAME"
                    />
                </FormGroup>

                <FormGroup controlId="DURATION" bsSize="large">
                    <FormLabel>TIME NEEDED TO FINISH(hour)</FormLabel>
                    <FormControl
                        autoFocus
                        type="number"
                        name="duration"
                        placeholder="Duration"
                    />
                </FormGroup>

                <Button type="submit">ADD CHAPTER DETAILS</Button>
        
            </Form>
        </>
    );
};


export default AddCourse;