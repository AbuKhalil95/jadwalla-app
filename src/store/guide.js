/* eslint-disable no-case-declarations */
import axios from 'axios';
import cookie from 'js-cookie';

const initialState = {
  week : [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
  case 'GET-SCHEDULE':
    return {
      ...state,
      week: payload,
    };

    case 'POST-SCHEDULE':
      return {
        ...state,
        week: payload,
      };
  
  default: 
    return state;
  }
};

export const getSchedule = () => {
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
