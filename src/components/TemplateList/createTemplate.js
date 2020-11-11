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

    let res = await axios.get(`https://jadwalla.herokuapp.com/api/v1/template/5f7ed6041a2e340533ff4336
    `, options);
    let template = await res.data.results[0];
    return template;
};

export const createSciTemplate = async () => {
    let sciTemplate = await getSciTemplate();
    let token = cookie.get('auth');
    let student_id = cookie.get('userId');
    let student_name = cookie.get('username');

    
    sciTemplate.student_id = student_id;
    sciTemplate.name += ` for ${student_name}`;
    delete sciTemplate.ownerId;

    var objectIdDel = function(doc) {
        if (doc != null && typeof(doc) != 'string' &&
            typeof(doc) != 'number' && typeof(doc) != 'boolean' ) {
            //for array length is defined however for objects length is undefined
            if (typeof(doc.length) == 'undefined') { 
            delete doc._id;
            for (var key in doc) {
                objectIdDel(doc[key]); //recursive del calls on object elements
            }
            }
            else {
            for (var i = 0; i < doc.length; i++) {
                objectIdDel(doc[i]);  //recursive del calls on array elements
            }
            }
        }
    } 
    
    objectIdDel(sciTemplate);

    const options = {
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Authorization': `Bearer ${token}`,
     },
    };
    let res = await axios.post(`https://jadwalla.herokuapp.com/api/v1/history
    `, sciTemplate, options);
    console.log(res);
    window.location.href="/";
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
    window.location.href="/";

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