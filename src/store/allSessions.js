/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import cookie from 'js-cookie';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('allllllllllllllll sessions state', state)
  switch (type) {
    case 'GET-SESSIONS':
      return payload;

    default:
      return state;
  }
};

export const getSessions = e => {
  let token = cookie.get('auth');
  let userId = cookie.get('userId');
  const options = {
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  return async dispatch => {
    let res = await axios.get(`https://jadwalla.herokuapp.com/api/v1/weekly/${userId}`, options);
    console.log('session data', res.data);

    dispatch({
      type: 'GET-SESSIONS',
      payload: res.data.results,
    });
  };
};
