import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';
import Content from './Chat-Content'
const MyChat = props => {
    const [socket, setSocket] = useState(socketClient);
    useEffect(() => {
        socket.close();
        setSocket(socketClient('http://localhost:3001/chatRoom'));
        return () => {
            socket.close();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Content socket={socket} />
        </>
    );
};



export default MyChat;