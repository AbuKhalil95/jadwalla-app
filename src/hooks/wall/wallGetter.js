import { useState, useEffect } from 'react';
import moment from 'moment';
const WallGetter = (socket) => {
    const [posts, setPosts] = useState([]);
    const [newPosts, setNewPosts] = useState([]);
    const [activateTyping, setActivateTyping] = useState(false);
    const [postsSpinning, setPostsSpinning] = useState(true);
    useEffect(() => {
        socket.on('history', payload => {
            let postsArray = payload.map(val => {
                return outputMessage(val);
            });
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
    return { posts, newPosts, activateTyping, postsSpinning };
}

export default WallGetter;


function outputMessage(payload) {
    let time = moment(payload.unixTime).format('MMMM Do YYYY, h:mm a');
    return { text: payload.text, time }
}
