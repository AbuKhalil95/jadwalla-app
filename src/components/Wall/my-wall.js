import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';
import Content from './my-wall-content'
import { connect } from 'react-redux';
const MyWall = props => {
    const [socket, setSocket] = useState(socketClient);
    useEffect(() => {
        socket.close();
        setSocket(socketClient('http://localhost:3001/myWall', { query: `userId=${props.auth.userId}` }));
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
const mapStateToProps = state => ({
    auth: state.auth,
})


export default connect(mapStateToProps)(MyWall) 