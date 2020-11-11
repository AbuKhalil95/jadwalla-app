import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';


const Profile = (props) => {

  return (
    <div>
      <div className='userCard'>
          <Link to='./create-template'>
            <Button variant="contained" color="primary">CREATE YOUR OWN TEMPLATE</Button> 
          </Link>
          <Link to='./select-template'>
            <Button variant="contained" color="primary">CHOOSE FROM OTHER TEMPLATES</Button> 
          </Link>
      </div>
    </div>
  )
}

export default withRouter(Profile);
