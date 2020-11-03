import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/">
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