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
    // let sciTemplate = await getSciTemplate();
    let token = cookie.get('auth');
    const options = {
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Authorization': `Bearer ${token}` },
    };

    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/history
    `, sciSchedule, options);
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
        headers: { 'Authorization': `Bearer ${token}` },
    };
    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/template`, template, options);
    console.log(res);
};

