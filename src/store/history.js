/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */

import axios from 'axios';
import cookie from 'js-cookie';

const initialState = {
  startDate: 0,
  name: '',
  courses: [],
  day: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const {type, payload} = action;
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newDate = year + "/" + month + "/" + day;

  switch(type){
    case 'GET-HISTORY':
      if (payload) {
        payload.startDate = newDate;
        return payload;
      } else {
        return state;
      }

    case 'TOGGLE-SESSION':
      console.log('Toggles session inside history',localStorage.getItem('session'));
      return state;
      
    default: 
      return state;
    }
};

export const getHistory = e => {
  let token = cookie.get('auth');
  let user_id = cookie.get('userId');
  const options = {
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  return async dispatch => {
    let res = await axios.get(`https://jadwalla.herokuapp.com/api/v1/history/${user_id}`, options);
    console.log('history data', res.data);

    dispatch({
      type: 'GET-HISTORY',
      payload: res.data.results[0],
    });
  };
};

// export const toggleSession = e => {
//   return async dispatch => {
//     console.log('data start session sending to history', e);
//     // let res = await axios.put(`https://jadwalla.herokuapp.com/api/v1/dashboard/${user_id}`, options);
//     // console.log(res)
//     dispatch({
//       type: 'TOGGLE-SESSION',
//       payload: e,
//     });
//   };
// };
