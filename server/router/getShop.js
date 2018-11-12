const pool = require('../pool');
const express = require('express');
let  router = express.Router();
router.get('/shop/:lid',(req,res)=>{
    let lid = req.params.lid;
    let sql = 'SELECT * FROM commodity WHERE pid = ?';
    pool.query(sql,lid,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/shoppingcar',(req,res)=>{
    let phone = req.query.phone;
    let sql = ` select shoppingcarlist.pid,shoppingcarlist.pname,shoppingcarlist.price,shoppingcarlist.img,shoppingcar.count from shoppingcarlist,shoppingcar where shoppingcarlist.pid = any(select shoppingcar.pid from shoppingcar where shoppingcar.uid = (select user.uid from user where user.phone = ?))  `;
    pool.query(sql,phone,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
module.exports = router;