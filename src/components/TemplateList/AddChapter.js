import React from 'react';
import { Button, FormGroup, FormControl, FormLabel,  Form } from "react-bootstrap";

const AddChapter = props => {

    return (
        <>

            <Form onSubmit={props.onSubmit} >
                <FormGroup controlId="CHAPTERNAME" bsSize="large">
                    <FormLabel>CHAPTER NAME</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="name"
                        defaultValue={(props.chapter && props.chapter.name) || "CHAPTER NAME"}
                    />
                </FormGroup>

                <FormGroup controlId="DURATION" bsSize="large">
                    <FormLabel>TIME NEEDED TO FINISH (hour)</FormLabel>
                    <FormControl
                        autoFocus
                        type="number"
                        name="duration"
                        defaultValue={(props.chapter && props.chapter.name) || "DURATION"}
                    />
                </FormGroup>

                <Button type="submit">ADD CHAPTER DETAILS</Button>
        
            </Form>
        </>
    );
};


export default AddChapter;