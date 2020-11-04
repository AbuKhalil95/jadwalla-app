/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import base64 from 'base-64';
import cookie from 'react-cookies';

const initialState = {
  userId: '',
  username: '',
  token: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SIGNUP':
      return {
        ...state,
        userId: payload._id,
        username: payload.username,
      };
    case 'SET_SIGNIN':
      return {
        ...state,
        userId: payload.user._id,
        username: payload.user.username,
        token: payload.token
      };
    case 'SET_LOGOUT':
      return {
        ...state,
        userId: {},
        username: {},
        token: {}
      };
    default:
      return state;
  }
};

export const handleSignUp = e => {
  return async dispatch => {
    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/signup`, e);
    console.log(res)
    cookie.save('auth', res.data.token);
    dispatch({
      type: 'SET_SIGNUP',
      payload: res.data,
    });
  };
};

export const handleSignIn = e => {
  const encodedData = base64.encode(`${e.username}:${e.password}`);
  const options = {
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Authorization': `Basic ${encodedData}` },
  };
  
  return async dispatch => {
    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/signin`, e, options);
    console.log(res)
    cookie.save('auth', res.data.token);
    dispatch({
      type: 'SET_SIGNIN',
      payload: res.data,
    });
  };
};

export const handleLogOut = () => {
  return async dispatch => {
    cookie.remove("auth");
    dispatch({
      type: 'SET_LOGOUT',
      payload: {},
    });
  };
};