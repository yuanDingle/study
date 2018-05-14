/**
 * 路由
 */
import React,{ Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../creatComponent/creatComponent';


export default class Page extends Component{
    constructor() {
        super();
    }

    render(){
        return (
                <div>
                    <ul>
                        <li><Link to="/home">首页</Link></li>
                        {/* <li><Link to="/other">其他页</Link></li> */}
                    </ul>
                    <Route path="/home" component={Home}/>
                    {/* <Route path="/other" component={Home}/> */}
                </div>
        )
    }
}