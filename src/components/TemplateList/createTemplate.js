import { getAllByTestId } from '@testing-library/react';
import axios from 'axios';
import cookie from 'js-cookie';

let sciSchedule = {
    startDate: new Date().toString(),
    name: 'SCIENTIFIC STREAM',
    courses: [
        {
            name: 'Physics',
            expectedHours: 100,
            noOfChapters: 15,
            chapters: [
                {
                    name: 'Motion and forces',
                    duration: 1,
                    state: 'not-studied',
                },
            ],
            isCompleted: false,
        },
    ],
    student_id: cookie.get('userId'),
    day: [
        
        
    ],
};

const getSciTemplate = async () => {
    let token = cookie.get('auth');
    const options = {
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Authorization': `Bearer ${token}` },
    };

    let res = await axios.get(`https://jadwalla.herokuapp.com/api/v1/template
    `, options);
    let template = await res.data.results[0];
    return template;
};

export const createSciTemplate = async () => {
    // let sciTemplate = JSON.stringify(await getSciTemplate());
    let token = cookie.get('auth');
    let params = JSON.stringify(sciSchedule);
    const options = {
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Authorization': `Bearer ${token}`,
        'content-type': 'application/json'
     },
    };
    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/history
    `, params, options);
    console.log(res);
};

export const createLitTemplate = async (litSchedule) => {
    let token = cookie.get('auth');
    const options = {
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Authorization': `Bearer ${token}` },
    };
    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/history`, litSchedule, options);
    console.log(res);
};

export const customizedTemplate = async (template) => {
    let token = cookie.get('auth');
    const options = {
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Authorization': `Bearer ${token}`,
        'content-type': 'application/json'
        },
    };
    let params = JSON.stringify(template);

    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/template`, params, options);
    console.log(res);
};

// {
//     date: new Date().toString(),
//     topics: [
//         {
//             name: 'Motion and forces',
//             totalHours: 1,
//             completed: 0,
//         },
//     ],
// },