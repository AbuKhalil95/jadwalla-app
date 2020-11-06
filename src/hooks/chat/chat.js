import { useState, useEffect } from 'react';
const Chat = (socket) => {
    const [roomName, setRoomName] = useState('');
    const [msg, setMsg] = useState('');
    const [usersNames, setUsersNames] = useState([]);
    const [oldMessages, setOldMessages] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    // var socket = io('/chatRoom');

    useEffect(() => {
        // http://localhost:3001/chatRoom?room=Math
        const room = window.location.href.split('?')[1].split('=')[1].toLowerCase();
        // const room = 'Math';
        const username = 'Osama';
        socket.emit('joinRoom', { room, username });
        socket.on('history', messages => {
            let oldMsgArr = messages.map(val => {
                return outputMessage(val);
            });
            setOldMessages([...oldMsgArr]);
        });
    }, [socket]);
    socket.on('roomUsers', ({ room, users }) => {
        roomName !== '' && setRoomName(room);
        setUsersNames([...users]);
    });
    socket.on('message', message => {

        setNewMessages([...newMessages, outputMessage(message)])
    });
    const _handleSubmit = (e) => {
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
