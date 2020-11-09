/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import cookie from 'js-cookie';

const initialState = {
  notifications : [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch(type){
  case 'GET-NOTIFICATIONS':
    return {
      ...state,
      notifications: payload,
    };
    
  default: 
    return state;
  }
};

export const getNotifications = () => {
  let token = cookie.get('auth');
  const options = {
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Authorization': `Bearer ${token}` },
  };
  return async dispatch => {
    let res = await axios.get(`https://jadwalla.herokuapp.com/api/v1/notifications`, options);
    console.log(res.data)
    
    dispatch({
      type: 'GET-NOTIFICATIONS',
      payload: res.data,
    });
  };
};
