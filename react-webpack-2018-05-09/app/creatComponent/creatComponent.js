/**
 * 动态的创建React组件
 */

import React, { Component } from 'react';
import Tee from './tee';

export default class Frame extends Component {
    constructor() {
        super();
        this.state = {
            currentComponent:null
        }
    }

    moveStart(event) {
        console.log(event.clientX);
        document.body.style.userSelect = 'none'

        document.addEventListener('mousemove', this.move)
        document.removeEventListener('mouseup', this.moveEnd)
        
    }

    move(event) {
        console.log(event)
    }

    moveEnd(event) {
        console.log(event.clientX);
        document.removeEventListener('mousemove', this.move)
        document.removeEventListener('mouseup', this.moveEnd)   
    }

    handleClick() {
        require.ensure(['./tee'], (require) => {
                  const Comp = require('./tee');
                  this.setState({
                    currentComponent:[
                        <div
                            onMouseDown={this.moveStart.bind(this)}
                            onMouseUp={this.moveEnd.bind(this)}
                            onTouchStart={this.moveStart.bind(this)}
                            onTouchEnd={this.moveStart.bind(this)}>
                            <Comp key='tee' />
                        </div>
                    ]
                  })
        })
    }

    ondragover(ev) {
        ev.preventDefault();
    }

    drop(ev){
        this.handleClick();
    }

    render() {
        let C = this.state.c;
        return(
            <div>
                拖拽
                <div  draggable="true">拽这里</div>

                <div className="canvas"
                     onDrop={this.drop.bind(this)}
                     onDragOver={this.ondragover.bind(this)}
                >
                    {this.state.currentComponent}
                </div>
            </div>
        );
    }
}