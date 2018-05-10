import React, { Component } from 'react';
import * as $ from 'jquery';

export default class Frame extends Component {
    constructor() {
        super();
    }


    render() {
        // $.post('/api/search',).then(function(res,req){
        //     console.log(res);
        // });

        $.ajax({
            type:"GET",
            url: '/users/addUser',
            data: {
                "name":'zhangsan',
                "age": '456'
            },
            async: false,
            success: function(res) {
                
            }
        });

        return(
            <div>
                整个面板zheng
            </div>
        );
    }
}