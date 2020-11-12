import { useState, useEffect } from 'react';
import cookie from 'js-cookie';
let username = cookie.get('username').toUpperCase();
const Chat = (socket) => {
    const [roomName, setRoomName] = useState('');
    const [msg, setMsg] = useState('');
    const [usersNames, setUsersNames] = useState([]);
    const [oldMessages, setOldMessages] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    useEffect(() => {
        const room = window.location.href.split('?')[1].split('=')[1].toLowerCase();
        setRoomName(room);
        username = cookie.get('username');
        socket.emit('joinRoom', { room, username });
        socket.on('history', messages => {
            let oldMsgArr = messages.map(val => {
                return outputMessage(val);
            });
            setOldMessages([...oldMsgArr]);
        });
    }, [socket]);
    socket.on('roomUsers', ({ room, users }) => {
        let usersArr = users.map(val => val.username);
        let prevVal = '';
        usersArr = usersArr.filter(val => {
            if (username.toUpperCase() !== val.toUpperCase() && val.toUpperCase() !== prevVal.toUpperCase()) {
                prevVal = val;
                return true
            }
            else return false
        });
        console.log('usersArr', usersArr)
        setUsersNames([...usersArr]);
    });
    socket.on('message', message => {
        setNewMessages([...newMessages, outputMessage(message)])
    });
    const _handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        if (msg !== '') {
            socket.emit('chatMessage', msg);
        }
    }
    const _handleChange = (e) => {
        e.target.value !== '' && setMsg(e.target.value);
    }
    return { _handleSubmit, _handleChange, roomName, usersNames, oldMessages, newMessages };
}
function outputMessage(message) {
    return {
        username: message.username,
        time: message.time,
        text: message.text
    }
}

export default Chat;
