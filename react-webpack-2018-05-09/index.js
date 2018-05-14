/**
 * 配置文件
 */
var proxy = require('proxy-middleware');
var express = require('express');
var url = require('url');var http = require('http');
var path = require('path');
var router = express.Router();
// var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var enrouten = require('express-enrouten');
var request = require('superagent')
var routers = require('./controllers/routers');

var HOST = 'http://192.168.56.1:8080/StadiumBooking/loginAction'; 

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.set('views', path.join(__dirname, 'build'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', routers);
app.use('/', require('connect-history-api-fallback')()); // Add

//设置跨域
app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();
    // use "*" here to accept any origin
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});


//路由跳转
app.get('/index', (request, response) => {
    response.sendFile(path.join(__dirname, '/build/index.html'));
});

// Serve the files on port 3000.
app.listen(8181, function () {
    console.log('Example app listening on port 8181!\n');
});