const pool = require('../pool');
const express = require('express');
let  router = express.Router();
router.get('/shoop/:lid',(req,res)=>{
    let lid = req.params.lid;
    let sql = 'SELECT * FROM shoppingcarlist WHERE pid = ?';
    pool.query(sql,lid,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/addShoop/:lid/:phone/:zf',(req,res)=>{
    let lid = req.params.lid;
    let zf = req.params.zf;

    let sql = ' select uid from user where phone = ?';
    pool.query(sql,req.params.phone,(err,result)=>{
        if(err)throw err;
        if(result.length <= 0){ return;}
        if(!result[0]){res.send({code:2,msg:false});return;};
        let sql = ' select * from shoppingcar where uid = ?';
        pool.query(sql,result[0]['uid'],(err,res)=>{
            let num = 0;
            if(res.length > 0){
                for(let i = 0; i < res.length;i++){
                    if(res[i].pid == req.params.lid){
                        if(zf == 1){
                            num =  ++res[i].count < 100 ? res[i].count : 99;
                        }else{
                            num =  --res[i].count > 0 ? res[i].count : 1;
                        }
                        sql = `update shoppingcar set count =  ${num} where id = ${res[i].id}`;
                        pool.query(sql,(err,result)=>{
                            if(err)throw err;
                        });
                        break;
                    }
                }
            }
            else{
                lid = [req.params.lid,result[0]['uid'],1];
                let sql = ' insert into shoppingcar values(null,?,?,?)';
                pool.query(sql,lid,(req,res)=>{
                    if(err)throw err;
                })
            }
        })
    });
    res.send({code:1,msg:true});
});
//删除购物车的功能  将购物车中的表count 换成 0  然后 判断不显示
module.exports = router;