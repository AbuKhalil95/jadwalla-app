import { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import moment from 'moment';
const WallGetter = (socket) => {
    const [posts, setPosts] = useState([]);
    const [newPosts, setNewPosts] = useState([]);
    const [sharedUrl, setShearedUrl] = useState('');
    const [activateTyping, setActivateTyping] = useState(false);
    const [postsSpinning, setPostsSpinning] = useState(true);
    useEffect(() => {
        //// You need to get the userId from store 
        let userId = cookie.get('userId');
        let link = 'http://localhost:3000/wall/' + userId;
        setShearedUrl(link);
    }, []);
    useEffect(() => {
        socket.on('history', payload => {
            let postsArray = payload.map(val => {
                return outputMessage(val);
            });
            console.log('postsArray', postsArray)

            setPosts([...postsArray]);
            setPostsSpinning(false);
        });

    }, [socket]);
    socket.on('newText', payload => {
        setNewPosts([outputMessage(payload), ...newPosts]);
    });
    socket.on('typing', val => {
        if (val) {
            setActivateTyping(true);
        } else {
            setActivateTyping(false);
        }
    });
    return { posts, newPosts, sharedUrl, activateTyping, postsSpinning };
}

export default WallGetter;


function outputMessage(payload) {
    let time = moment(payload.unixTime).format('MMMM Do YYYY, h:mm a');
    return { text: payload.text, time }
}