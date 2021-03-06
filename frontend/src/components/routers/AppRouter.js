import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Book1 from '../books/Book1';
import Book2 from '../books/Book2';
import Book3 from '../books/Book3';
import Book4 from '../books/Book4';
import Story from '../Story';
import Library from '../Library';
import Login from '../Login';
import SignUpForm from '../SignUpForm';

function AppRouter() {
    return (
        <div>
            <Switch>
                <Route exact path="/book1">
                    <Book1 />
                </Route>
                <Route exact path="/book2">
                    <Book2 />
                </Route>
                <Route exact path="/book3">
                    <Book3 />
                </Route>
                <Route exact path="/book4">
                    <Book4 />
                </Route>
                <Route exact path="/story">
                    <Story />
                </Route>
                <Route exact path="/library">
                    <Library />
                </Route>
                <Route exact path="/">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}

export default AppRouter