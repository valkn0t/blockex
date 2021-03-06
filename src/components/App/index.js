import React, {Component} from 'react';

import Block from './../Block';
import Home from './../Home';
import Ethemy from './../Ethemy';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'

import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Block Explorer</h2>
                </div>
                <div className="App-nav">
                    <Router>
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/block">Block</Link>
                            <Link to="/contract">Ethemy</Link>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/contract" component={Ethemy}/>
                            <Route exact path="/block" render={() => (
                                <h3>Please select a block Hash:</h3>
                            )}/>
                            <Route exact path="/block/:blockHash" component={Block}/>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;