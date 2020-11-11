import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Book1 from './Book1';
import Book2 from './Book2';
import Book3 from './Book3';
import Book4 from './Book4';

export function BookRouter() {
    return (
        <div>
            <Switch>
                <Route path="/book1">
                    <Book1 />
                </Route>
                <Route path="/book2">
                    <Book2 />
                </Route>
                <Route path="/book3">
                    <Book3 />
                </Route>
                <Route path="/book4">
                    <Book4 />
                </Route>
            </Switch>
        </div>
    );
}