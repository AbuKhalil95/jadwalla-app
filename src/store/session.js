/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */

const initialState = {
  session: JSON.parse(localStorage.getItem('session')) || 0,
  active: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newDate = year + "/" + month + "/" + day;
  let date = {
    start: newDate, 
    end: 0,
  }

  switch (type) {
    case 'TOGGLE-SESSION':
      console.log('Toggles session');
      if (!state.active) {
        localStorage.setItem('session', JSON.stringify(date));
      } else {
        date.end = newDate;
        newDate = year + "/" + month + "/" + (day+1);
        localStorage.setItem('session', JSON.stringify(date));
      }
      return {...state, active: !state.active};

    default:
      return state;
  }
};

export const toggleSession = e => {
  return async dispatch => {
    console.log('data start session sending to history', e);
    // let res = await axios.put(`https://jadwalla.herokuapp.com/api/v1/dashboard/${user_id}`, options);
    // console.log(res)
    dispatch({
      type: 'TOGGLE-SESSION',
      payload: e,
    });
  };
};
