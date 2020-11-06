import React from 'react';
import { Button, FormGroup, FormControl, FormLabel,  Form } from "react-bootstrap";

const AddCourse = props => {

    return (
        <>

            <Form onSubmit={props.onSubmit}>
                <FormGroup controlId="COURSENAME" bsSize="large">
                    <FormLabel>COURSE NAME</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="name"
                        placeholder="COURSE NAME"
                    />
                </FormGroup>

                <FormGroup controlId="HOURS" bsSize="large">
                    <FormLabel>TIME NEEDED TO FINISH(hour)</FormLabel>
                    <FormControl
                        autoFocus
                        type="number"
                        name="expectedHours"
                        placeholder="EXPECTED HOURS"
                    />
                </FormGroup>

                <FormGroup controlId="TEMPLATENAME" bsSize="large">
                    <FormLabel>HOW MANY CHAPTERS?</FormLabel>
                    <FormControl
                        autoFocus
                        type="number"
                        name="noOfChapters"
                        placeholder="NUMBER OF CHAPTERS"
                    />
                </FormGroup>

                <Button type="submit">ADD COURSE DETAILS</Button>
        
            </Form>

        </>
    );
};


export default AddCourse;