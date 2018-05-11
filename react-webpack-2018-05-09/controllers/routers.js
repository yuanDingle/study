var express = require('express');
var userDao = require('../dao/userDao');
var router = express.Router();

/**
 * 请求接受转接的地方
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addUser', function(req, res, next) {
    userDao.add(req, res, next);
});

module.exports = router;
