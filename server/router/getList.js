const pool = require('../pool');
const express = require('express');
var router = express.Router();
router.get('/phone',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    var sql = "SELECT * FROM phone_list";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
module.exports = router;
