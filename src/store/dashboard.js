/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import cookie from 'js-cookie';

const initialState = {
  statistics : [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
  case 'GET-DASHBOARD':
    return {
      ...state,
      statistics: payload,
    };
  
  default: 
    return state;
  }
};

export const getDash = () => {
  let token = cookie.get('auth');
  let user_id = cookie.get('userId');
  const options = {
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Authorization': `Bearer ${token}` },
  };
  return async dispatch => {
    let res = await axios.get(`https://jadwalla.herokuapp.com/api/v1/dashboard/${user_id}`, options);
    console.log(res.data)
    dispatch({
      type: 'GET-DASHBOARD',
      payload: res.data,
    });
  };
};
