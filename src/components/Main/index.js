import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../Auth/Signin';
import SignUp from '../Auth/Signup';
import MyWall from '../Wall/my-wall';
import Wall from '../Wall/wall';
import Chat from '../Chat/Chat';
import MyChat from '../Chat/subject-chat';
import Home_Osama from '../HomePage';
import Dashboard from '../Dashboard/Dashboard';
import Home from './home.js';
import TemplateCreator from '../TemplateList/TemplateCreator.js';
import TemplateSelector from '../TemplateList/TemplateSelector.js';
import Notifications from '../Notification/Notifications';

function Main() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home_Osama />
                    <Home />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>

                <Route exact path="/signup">
                    <SignUp />
                </Route>

                <Route exact path="/myWall">
                    <MyWall />
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
                <Route path="/wall">
                    <Wall />
                </Route>
                <Route exact path="/chat">
                    <Chat />
                </Route>
                <Route exact path="/myChat">
                    <MyChat />
                </Route>

                <Route exact path="/yahya">
                    {/* <Yahya/> */}
                </Route>
                <Route>404 Page Not Found!</Route>
            </Switch>
        </>
    )
}


export default Main;