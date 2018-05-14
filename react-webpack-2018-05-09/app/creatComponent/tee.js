/**
 * 动态的创建React组件
 */

import React, { Component } from 'react';
import './style.less';

class Tee extends Component {
    constructor() {
        super();
    }

    handleClick() {
        alert(1);
    }

    render() {
        return(
            <div>
                <div 
                className="item" style={{height: 200, width: 500, top: 110, left: 310}}>
                    item1
                </div>
            </div>
        );
    }
}
//使用require必须用module.export来导出
module.exports = Tee;