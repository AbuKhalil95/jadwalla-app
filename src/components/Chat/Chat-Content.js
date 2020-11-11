import React from 'react';
import chatHook from '../../hooks/chat/chat'

const Content = props => {
    const { _handleSubmit, _handleChange, roomName, usersNames, oldMessages, newMessages } = chatHook(props.socket);
    // let room = 'math'
    // let users = ['ahmad', 'osama']
    // let oldMassages = [{ username: 'ahmad', time: '9:00', text: 'hello' }]
    // let newMessages = [{ username: 'osama', time: '8:00', text: 'hi' }]

    return (

        <div>
            <div>
                Room: {roomName}
            </div>
            {oldMessages.map((detail, index) => {
                return (
                    <div>
                        <span>{detail.username}</span>
                        <span>{detail.time}</span>
                        <span>{detail.text}</span>
                    </div>
                )
            })}
            {newMessages.map((detail, index) => {
                return (
                    <div>
                        <span>{detail.username}</span>
                        <span>{detail.time}</span>
                        <span>{detail.text}</span>
                    </div>
                )
            })}
            <div>
                <h1>Users</h1>
                {usersNames.map((detail, index) => {
                    return (
                        <p>{detail}</p>
                    )
                })}
            </div>
            <form onSubmit={_handleSubmit}>
                <input onChange={_handleChange} type="text"></input>
                <button type="submit">submit</button>
            </form>

        </div>
    )

};



export default Content;