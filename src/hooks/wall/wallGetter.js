import { useState, useEffect } from 'react';
import moment from 'moment';
const WallGetter = (socket) => {
    const [posts, setPosts] = useState([]);
    const [newPosts, setNewPosts] = useState([]);
    const [sharedUrl, setShearedUrl] = useState('');
    const [activateTyping, setActivateTyping] = useState(false);
    useEffect(() => {
        //// You need to get the userId from store 
        let userId = '5f7c297b3994e4066c549646';
        let link = 'http://localhost:3000/wall/' + userId;
        setShearedUrl(link);
    }, []);
    useEffect(() => {
        socket.on('history', payload => {
            let postsArray = payload.map(val => {
                return outputMessage(val);
            });
            setPosts([...postsArray]);
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
    return { posts, newPosts, sharedUrl, activateTyping };
}

export default WallGetter;


function outputMessage(payload) {
    let time = moment(payload.unixTime).format('MMMM Do YYYY, h:mm a');
    return { text: payload.text, time }
}
