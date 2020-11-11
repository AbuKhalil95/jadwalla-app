import React from 'react';
import { Button, FormGroup, FormControl, FormLabel,  Form } from "react-bootstrap";

const AddCourse = props => {

    return (
        <>

            <Form onSubmit={props.onSubmit}>
                <FormGroup controlId="COURSENAME" size="large">
                    <FormLabel>COURSE NAME</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="name"
                        defaultValue={(props.course && props.course.name) || "COURSE NAME"}
                    />
                </FormGroup>

                <FormGroup controlId="HOURS" size="large">
                    <FormLabel>TIME NEEDED TO FINISH(hour)</FormLabel>
                    <FormControl
                        autoFocus
                        type="number"
                        name="expectedHours"
                        defaultValue={(props.course && props.course.expectedHours) || "EXPECTED HOURS"}
                    />
                </FormGroup>

                <FormGroup controlId="TEMPLATENAME" size="large">
                    <FormLabel>HOW MANY CHAPTERS?</FormLabel>
                    <FormControl
                        autoFocus
                        type="number"
                        name="noOfChapters"
                        defaultValue={(props.course && props.course.noOfChapters) || "Number of chapters"}
                    />
                </FormGroup>

                <Button type="submit">ADD COURSE DETAILS</Button>
        
            </Form>

        </>
    );
};


export default AddCourse;