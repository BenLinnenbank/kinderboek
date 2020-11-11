import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Story from '../Story';
import Library from '../Library';
import Login from '../Login';

export function PageRouter() {
    return (
        <div>
            <Switch>
                <Route path="/story">
                    <Story />
                </Route>
                <Route path="/library">
                    <Library />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}