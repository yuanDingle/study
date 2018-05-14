import React, { Component } from 'react';
import Create from './creatComponent/creatComponent';
import { HashRouter as Router,hashHistory as history } from "react-router-dom";
import Page from './router/routers';

export default class App extends Component {
    constructor() {
        super();
    }

    han() {
        console.log(history);
        location.replace("#/home");
    }

    render() {
        return(
            <Router>
                <div>
                    <p onClick={this.han.bind(this)}>学习中......</p>
                    <Create />

                    <Page />
                </div>
            </Router>
        );
    }
}