/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { handleCourse, handleChapter, setTemp } from '../../store/template';
import AddCourse from './AddCourse';
import AddChapter from './AddChapter';


import { Card, Button, FormGroup, FormControl, FormLabel,  Form } from "react-bootstrap";
import { SignalCellularNullTwoTone } from '@material-ui/icons';

const TemplateList = props => {
  const [details, toggleDetails] = useState(false);
  const [index, changeIndex] = useState(-1);
  const [idx, setIdx] = useState(0);

  const handleDetails = (index) => {
    toggleDetails(!details);
    changeIndex(index);
  }

  const handleSubmit = (e) => {
    e.preventDefault();  
    props.setTemp(e.target.tempName.value);
  };

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
    // handleClose();
  };

  const onChapterSubmit = (e)=> {
    e.preventDefault();
    const chapter = {
        name: e.target.name.value,
        duration: Number(e.target.duration.value),
        state: 'not-studied',
    };
    props.handleChapter(idx, chapter);
    // handleCloseCh();
  };

  const RenderDetails = (props) => {
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId={props.subject.name} bsSize="large">
            <FormLabel>Subject Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              name="name"
              defaultValue={props.subject.name}
            />
          </FormGroup>

          <FormGroup controlId="DURATION" bsSize="large">
              <FormLabel>TIME NEEDED TO FINISH(hour)</FormLabel>
              <FormControl
                  autoFocus
                  type="number"
                  name="duration"
                  placeholder="Duration"
                  defaultValue="1"
              />
          </FormGroup>
          <Button type="submit">ADD CHAPTER DETAILS</Button>
        </Form> 
        {props.subject.courses.map(course => {
          return <>
            <AddCourse onSubmit={onCourseSubmit} course={course}/>
            {course.chapters.map(chapter => {
              return <AddChapter chapter={chapter}/>
          })}
          </>
        })}
      </>
    )
  }

  // useEffect(() => {
  //   RenderDetails();
  // }, [index])

  return (
    <>
      {details ? (
      <>
        <Button onClick={() => {handleDetails()}}>Return to list</Button>
        <RenderDetails subject={props.list[index]} />
      </>
      ) : props.list ? props.list.map((card, index) => {
        return (
          <li key={index}>
            <Card style={{ width: '18rem' }} className="mb-2">
              <Card.Header>{card.name.toUpperCase()}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {card.description}
                </Card.Text>
                <Button onClick={() => {handleDetails(index)}}>CHOOSE THIS TEMPLATE</Button>
              </Card.Body>
            </Card>
          </li>
        )
      }) : null}
    </>
  );
};

const mapStateToProps = state => ({
  list: state.allTemplates,
});

const mapDispatchToProps = { setTemp, handleCourse, handleChapter };

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);