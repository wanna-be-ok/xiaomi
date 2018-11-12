const pool = require('../pool');
const express = require('express');

var router = express.Router();
router.get('/nav',(req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  var sql = "SELECT * FROM index_header_title";
  pool.query(sql,(err,result)=>{
      //如果执行操作出错误，抛出错误对象
      if(err)throw err;  
      //1 执行正确  -1 -2 -3 操作失败 告诉程序 
      res.send({code:1,msg:result});
  });
});
router.get('/slider',(req,res)=>{
   var sql = "SELECT * FROM index_header_slider";
   pool.query(sql,(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:result});
   })

});

//4:导出当前路由模块
module.exports = router;
