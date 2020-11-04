import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";


const Home = props => {

  // useEffect(() => {
  //   props.get();
  // }, [])

  return (
    <>
      <div>This is a guide pre login {props.auth.username || 'non-logged'}</div>
      <div>This is guide shown only once after login {props.auth.username}</div>
      <div>This is not a guide, but a homepage ? dashboard</div>
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

// const mapDispatchToProps = (dispatch, getState) => ({ 
//   get: ()=> dispatch(getRemoteData('products')),
//   addCart: (input)=> dispatch(addCart(input)),
// });


export default (connect(mapStateToProps)(Home));