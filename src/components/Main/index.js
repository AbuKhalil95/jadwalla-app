import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../Auth/Signin';
import SignUp from '../Auth/Signup';
import Dashboard from '../Dashboard/Dashboard';
import Home from './home.js';
import TemplateCreator from '../TemplateList/TemplateCreator.js';
import TemplateSelector from '../TemplateList/TemplateSelector.js';
import Notifications from '../Notification/Notifications';
import Profile from '../profile/profile';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/signin">
                    <SignIn />
                </Route>

                <Route exact path="/signup">
                    <SignUp />
                </Route>

                <Route exact path="/profile">
                    <Profile/>
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
                
                <Route exact path="/my-wall">
                </Route>
                <Route path="/wall/">
                </Route>
                <Route exact path="/chat">
                </Route>

                <Route>404 Page Not Found!</Route>
            </Switch>
        </main>
    )
}


export default Main;