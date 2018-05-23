/**
 * 路由配置页面
 */
import React,{ Component } from "react";

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from '../creatComponent/creatComponent';
import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

const SubMenu = Menu.SubMenu;


export default class Page extends Component{
    constructor() {
        super();

        this.state = {
            collapsed: false,
        }
    }

    toggleCollapsed() {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    /**
     * 初始化menu数据
     */
    initMenuData() {
        const menuList = [
            {title: '博客', child:[{title: '发布博客', url: '#/'}]}
        ];
    }

    render(){
        return (
                <div>
                    {/* <ul>
                        <li><Link to="/home">首页</Link></li>
                    </ul> */}
                    <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span><Link to="/home">发布博客</Link></span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>

                    {/* 路由 */}
                    <Route exact path="/home" component={Home}/>
                    {/* <Redirect path="/" to={{pathname: '/home'}} /> */}
                </div>
        )
    }
}