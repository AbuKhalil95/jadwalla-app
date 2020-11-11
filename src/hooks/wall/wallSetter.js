import { useState, useEffect } from 'react';
const WallSetter = (socket) => {
    const [text, setText] = useState('');
    const [isSent, setIsSent] = useState(false);
    useEffect(() => {
        const ownerId = window.location.href.split('/wall/')[1];
        socket.emit('userId', ownerId);
        socket.emit('typing', false);
    }, [socket]);
    const _handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('addToWall', text);
        socket.emit('typing', false);
        setIsSent(true);
        socket.close();
    }
    const _handleChange = (e) => {
        e.target.value !== '' ? socket.emit('typing', true) : socket.emit('typing', false);
        setText(e.target.value);
    }
    return { _handleSubmit, _handleChange, isSent };
}
export default WallSetter;
