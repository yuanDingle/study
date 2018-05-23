import React, { Component } from 'react';
import Create from './creatComponent/creatComponent';
import { HashRouter as Router,hashHistory as history,Route } from "react-router-dom";
import Page from './router/routers';
import Login from './backstage/login/Login';
// var E = require('wangeditor')  // 使用 npm 安装
import $ from 'jquery';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            editorContent: ''
        }
    }

    han() {
        //js跳转路由
        location.replace("#/home");
    }

    componentDidMount1() {
        // 创建编辑器
        var editor = new E('#editor')
        editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
        this.setState({
          editorContent: html
        })
      }        
        editor.create();
    }

    clickHandle() {
        alert(this.state.editorContent)

        $('#neirong').html(this.state.editorContent);
    }

    render() {
        return(
            <Router>
                <div>
                    {/* <p onClick={this.han.bind(this)}>学习中......</p>
                    <Create /> */}

                    {/* <Page /> */}

                    <Route path="/" component={Login} exact />
                    {/* 主页 */}
                    <Route path="/home" component={Page}/>

                    {/* <div>
                        <p onClick={this.clickHandle.bind(this)}>富文本测试</p>
                        <div id="editor">
                            <p>欢迎使用 wangEditor 富文本编辑器</p>
                        </div>

                        <div id="neirong"></div>
                    </div> */}
                </div>
            </Router>
        );
    }
}