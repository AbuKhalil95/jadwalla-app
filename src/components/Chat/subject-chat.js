import React from 'react';
import { connect } from 'react-redux';


const MyChat = props => {
    let room = 'math'
    let users = ['ahmad', 'osama']
    let oldMassages = [{ username: 'ahmad', time: '9:00', text: 'hello' }]
    let newMessages = [{ username: 'osama', time: '8:00', text: 'hi' }]

    return (

        <div>
            <div>
                Room: {room}
            </div>
            {oldMassages.map((detail, index) => {
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
                {users.map((detail, index) => {
                    return (
                        <p>{detail}</p>
                    )
                })}
            </div>
            <form>
                <input type="text"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )

};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyChat);