import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../Auth/Signin';
import { connect } from 'react-redux'
import SignUp from '../Auth/Signup';
import MyWall from '../Wall/my-wall';
import Wall from '../Wall/wall';
import Chat from '../Chat/Chat';
import MyChat from '../Chat/subject-chat';
import Landing from '../HomePage';
import Dashboard from '../Dashboard/Dashboard';
import Home from './home.js';
import TemplateCreator from '../TemplateList/TemplateCreator.js';
import TemplateSelector from '../TemplateList/TemplateSelector.js';
import Notifications from '../Notification/Notifications';
import Profile from '../profile/profile';
import cookie from 'js-cookie';
import OurTeam from '../ourTeam/OurTeam'
function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    {cookie.get('userId') ? <Home /> : <Landing />}
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/create-template">
                    <TemplateCreator />
                </Route>
                <Route exact path="/select-template">
                    <TemplateSelector />
                </Route>
                <Route exact path="/Notifications">
                    <Notifications />
                </Route>
                <Route exact path="/myWall">
                    <MyWall />
                </Route>
                <Route path="/wall/">
                    <Wall />
                </Route>
                <Route exact path="/myChat">
                    <MyChat />
                </Route>
                <Route exact path="/Chat">
                    <Chat />
                </Route>
                <Route exact path="/OurTeam">
                    <OurTeam />
                </Route>
                <Route>404 Page Not Found!</Route>
            </Switch >
        </main >
    )
}
const mapStateToProps = state => ({
    username: state.username,
})
export default connect(mapStateToProps)(Main); 