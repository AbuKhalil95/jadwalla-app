import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../Auth/Signin';
import SignUp from '../Auth/Signup';
import MyWall from '../Wall/my-wall';
import Wall from '../Wall/wall';
import Chat from '../Chat/Chat';
import MyChat from '../Chat/subject-chat';
import OurTeam from '../ourTem/ourTeam';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                </Route>

                <Route exact path="/signin">
                    <SignIn />
                </Route>

                <Route exact path="/signup">
                    <SignUp />
                </Route>

                <Route exact path="/my-wall">
                    <MyWall />
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
                <Route exact path="/ourTeam">
                    <OurTeam />
                </Route>

                <Route>404 Page Not Found!</Route>
            </Switch>
        </main>
    )
}


export default Main;