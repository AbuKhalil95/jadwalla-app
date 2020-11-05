/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import cookie from 'js-cookie';

const initialState = {
  session: localStorage.getItem('session') || 0,
  active: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE':
      console.log('Toggles session');
      return {...state, active: !state.active};

    default:
      return state;
  }
};

export const toggleSession = e => {
  //   let token = cookie.get('auth');
  // let user_id = cookie.get('userId');
  // const options = {
  //   mode: 'cors',
  //   cache: 'no-cache',
  //   headers: { 'Authorization': `Bearer ${token}` },
  // };

  return async dispatch => {
    console.log('data start session sending to history', e);
    // let res = await axios.put(`https://jadwalla.herokuapp.com/api/v1/dashboard/${user_id}`, options);
    // console.log(res)
    dispatch({
      type: 'TOGGLE',
      payload: e,
    });
  };
};
