/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import cookie from 'js-cookie';

const initialState = {};

export default (state = initialState, action) => {
    const { type, payload } = action;
    console.log('template state', state)
    switch (type) {
        case 'GET_TEMPLATES':
            return payload;

        default:
            return state;
    }
};


export const getTemplates = e => {
  let token = cookie.get('auth');
  const options = {
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  return async dispatch => {
    let res = await axios.get(`https://jadwalla.herokuapp.com/api/v1/template/`, options);
    console.log('template data', res.data);

    dispatch({
      type: 'GET_TEMPLATES',
      payload: res.data.results,
    });
  };
};
