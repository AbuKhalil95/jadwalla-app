import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';
import Content from './wall-content';
import { connect } from 'react-redux';

const Wall = props => {
    const [socket, setSocket] = useState(socketClient);
    useEffect(() => {
        socket.close();
        setSocket(socketClient('http://localhost:3001/wall/give-support'));
        return () => {
            socket.close();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Content socket={socket} />
        </>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Wall) 