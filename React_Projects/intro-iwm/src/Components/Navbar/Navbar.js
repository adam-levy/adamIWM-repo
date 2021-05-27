import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import {Button} from "../Button/Button.js";
import './Navbar.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//<Route path="/insert/your/path/here" component={YourComponent} /> 

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() { 
        return ( 
            /*<nav className="NavbarItems">
                <h1 className="navbar-logo">MyNavbar <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' 
                        :
                        'fas fa-bars'}>
                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
            */
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li><a href="../../index.js">Home</a></li>
                            <li><a href="../secondpage.js">Second Page</a></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path = "/"><Home /></Route>
                    <Route path="../secondPage.js"><SecondPage /></Route>
                </Switch>
            </Router>

         );
    }
}

export default Navbar