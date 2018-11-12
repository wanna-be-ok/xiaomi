const pool = require('../pool');
const express = require('express');
var router = express.Router();
router.get('/small',(req,res)=>{
    var sql = "SELECT * FROM index_small";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    });
});
router.get('/big',(req,res)=>{
    var sql = "SELECT * FROM index_big";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    });
});
router.get('/bottom',(req,res)=>{
    var sql = "SELECT * FROM index_neirong";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    });
});
module.exports = router;
