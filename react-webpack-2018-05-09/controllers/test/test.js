module.exports = function(router) {
    router.get('/search', function (req, res){
        res.json({
            "code": 1, //状态
            "result": {
                "record_cnt": 200,
                "lists": data
            }
        });
    })
}