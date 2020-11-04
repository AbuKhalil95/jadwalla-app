import React, { useState, useEffect, usePrevious } from 'react';
import socketClient from 'socket.io-client';

const WallSetter = () => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const prevIsTyping = usePrevious(isTyping);
    const [isSent, setIsSent] = useState(false);

    const socket = socketClient('http://localhost:3001/wall/give-support');
    useEffect(() => {
        const ownerId = window.location.href.split('/wall/give-support/')[1];
        socket.emit('userId', ownerId);
    }, []);
    useEffect(() => {

        if (isTyping !== prevIsTyping) {
            socket.emit('typing', true);
        } else if (!isTyping !== prevIsTyping) {
            socket.emit('typing', false);
        }
    }, [isTyping]);
    const _handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('addToWall', text);
        socket.emit('typing', false);
        setIsSent(true);
    }
    const _handleChange = (e) => {
        e.target.value !== '' ? setIsTyping(true) : setIsTyping(false);
        setText(e.target.value);
    }
    return { _handleSubmit, _handleChange, isSent };
}
export default WallSetter;




