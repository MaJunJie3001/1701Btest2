var express = require('express');
var Mongo = require("mongodb-curd");
var router = express.Router();


var db = "test2"; //数据库名称
var colIncome = "income"; //收入的集合名
var colPay = "pay"; //支出的集合名
/* GET home page. */
//收入接口
router.post('/api/addIncome', function(req, res, next) {
    var obj = req.body;
    if (obj.date && obj.list && obj.money && obj.pepol && obj.mite) {
        Mongo.insert(db, colIncome, obj, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "sucdess",
                    data: result
                })
            }
        })
    } else {
        res.send({
            code: 2,
            mes: "请填写完整信息"
        })
    }
});


//支出接口
router.post('/api/addPay', function(req, res, next) {
    var obj = req.body;
    if (obj.date && obj.list && obj.money && obj.pepol && obj.mite) {
        Mongo.insert(db, colPay, obj, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "sucdess",
                    data: result
                })
            }
        })
    } else {
        res.send({
            code: 2,
            mes: "请填写完整信息"
        })
    }
});

module.exports = router;