import React from 'react';
import { Button, FormGroup, FormControl, FormLabel,  Form } from "react-bootstrap";

const AddChapter = props => {

    return (
        <>

            <Form onSubmit={props.onSubmit} >
                <FormGroup controlId="formBasicRange" size="large">
                    <FormLabel>Percentage Completed 0-100</FormLabel>
                    <FormControl
                        autoFocus
                        type="range"
                        name="completed"
                        defaultValue={(props.completed) || 0}
                        min="0"
                        max="100"
                    />
                </FormGroup>

                <FormGroup controlId="time" size="large">
                    <FormLabel>Time Spent in minutes</FormLabel>
                    <FormControl
                        autoFocus
                        type="number"
                        name="time"
                        defaultValue={parseInt(props.time/60) || 0}
                    />
                </FormGroup>

                <Button type="submit">Confirm</Button>
            </Form>
        </>
    );
};


export default AddChapter;