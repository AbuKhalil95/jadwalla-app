// /* eslint-disable import/no-anonymous-default-export */
// /* eslint-disable no-duplicate-case */
// /* eslint-disable no-case-declarations */
// import axios from 'axios';

// const initialState = {
//   session: localStorage.getItem('session'),
// };

// export default (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'START':
//       return {
//         ...state,
//         userId: payload._id,
//         username: payload.username,
//       };
//     case 'END':
//       return {
//         ...state,
//         userId: payload.user._id,
//         username: payload.user.username,
//         token: payload.token
//       };
    
//     default:
//       return state;
//   }
// };

// export const handleStart = e => {
//   return async dispatch => {
//     let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/signup`, e);
//     console.log(res)
//     cookie.save('auth', res.data.token);
//     dispatch({
//       type: 'SET_SIGNUP',
//       payload: res.data,
//     });
//   };
// };

// export const handleEnd = e => {
//   const encodedData = base64.encode(`${e.username}:${e.password}`);
//   const options = {
//     mode: 'cors',
//     cache: 'no-cache',
//     headers: { 'Authorization': `Basic ${encodedData}` },
//   };
  
//   return async dispatch => {
//     let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/signin`, e, options);
//     console.log(res)
//     cookie.set('auth', res.data.token, { expires: 1 });
//     cookie.set('userId', res.data.user._id, { expires: 1 });
//     dispatch({
//       type: 'SET_SIGNIN',
//       payload: res.data,
//     });
//   };
// };
