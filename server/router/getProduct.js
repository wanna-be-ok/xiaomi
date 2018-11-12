/**
 * Created by Administrator on 2018/10/31.
 */
const express = require('express');
const pool = require('./../pool');
var router = express.Router();
router.get('/product',(req,res)=>{
    var sql = 'SELECT * FROM product';
    pool.query(sql,(err,result)=>{
       if(err) throw err;
        res.send({code:1,msg:result});
    });
});
module.exports=router;