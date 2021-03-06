import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';
import SecondPage from './secondpage';

function Header () {
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/secondpage">Second Page</Link></li>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Route path="/secondpage"><SecondPage /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </Router>
    );
}

export default Header;