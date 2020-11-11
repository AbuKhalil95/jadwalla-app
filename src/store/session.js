/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */

import axios from 'axios';
import cookie from 'js-cookie';

const initialState = {
  session: JSON.parse(localStorage.getItem('session')) || 0,
  active: false,
  day:{
    ownerId: cookie.get('userId'),
    date: 0,
    lessonId: '',
    lesson: '',
    time: 0,
    completed:0,
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  var dateObj = new Date();
  let date = {
    start: 0, 
    end: 0,
  }

  switch (type) {
    case 'TOGGLE-SESSION':
      console.log('Toggles session', payload);
      let today;
      if (!state.active) {
        date.start = dateObj;
        localStorage.setItem('session', JSON.stringify(date));

        today = initialState.day;
        today.date = new Date();
        today.lessonId = payload[0];
        today.lesson = payload[1];
        // return {...state, active: !state.active, day: today};

      } else if(state.active) {
        date.start = JSON.parse(localStorage.getItem('session')).start;
        console.log('date start ', date.start);
        date.end = dateObj;
        localStorage.setItem('session', JSON.stringify(date));
        
        today = state.day;
        today.time = payload.time;
        today.completed = payload.completed;
      }
      return {...state, active: !state.active, day: today};

      case 'ADD-SESSION': 
        return state;

    default:
      return state;
  }
};

export const toggleSession = (id, name) => {
  return async dispatch => {
    console.log('data start session sending to history', id);
    // let res = await axios.put(`https://jadwalla.herokuapp.com/api/v1/dashboard/${user_id}`, options);
    // console.log(res)
    dispatch({
      type: 'TOGGLE-SESSION',
      payload: [id, name],
    });
  };
};
