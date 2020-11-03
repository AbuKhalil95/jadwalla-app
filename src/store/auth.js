/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */

const initialState = {

};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch(type){
  case 'changeThis':
    
  default: 
    return state;
  }
};

export const changeThis = changeThis => {
  return {
    type: 'changeThis',
    payload: changeThis,
  };
};
