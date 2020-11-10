/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import cookie from 'js-cookie';

const initialState = {
    name: '',
    courses: [],
    ownerId : cookie.get('userId'),

};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_NAME':
            return { ...state, name: payload };
        case 'ADD_COURSE':
            state.courses.push(payload);
            return state;
        case 'ADD_CHAPTER':
            state.courses[payload.idx].chapters.push(payload.ch);
            return state;

        default:
            return state;
    }
};

export const handleCourse = (course) => {
    return {
        type: 'ADD_COURSE',
        payload: course,
    };
};

export const handleChapter = (idx,ch) => {
    let chData = {
        idx: idx,
        ch: ch, 
    };
    return {
        type: 'ADD_CHAPTER',
        payload: chData,
    };
};

export const setTemp = name => {
    return {
        type: 'SET_NAME',
        payload: name,
    };
};

export const chooseTemplate = template => {
    
}
