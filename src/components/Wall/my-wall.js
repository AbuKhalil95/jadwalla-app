import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';
import Content from './my-wall-content'
import { connect } from 'react-redux';
import cookie from 'js-cookie';
const MyWall = props => {
    const [socket, setSocket] = useState(socketClient);
    useEffect(() => {
        socket.close();
        setSocket(socketClient('http://localhost:3001/myWall', { query: "userId=" + cookie.get('userId') }));
        return () => {
            socket.close();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Content socket={socket} userId={props.userId} />
        </>
    );
};

const mapStateToProps = state => ({
    userId: state.userId
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyWall) 