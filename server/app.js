const express = require('express');
const getHeader = require('./router/getHeader');
const getIndex = require('./router/getIndex');
const getList = require('./router/getList');
const getProduct = require('./router/getProduct');
const getShop = require('./router/getShop');
const getShoop = require('./router/getShoop');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

const fs = require('fs');


let app = express();

const mysql = require("mysql");



//2:创建连接池对象
let pool = mysql.createPool({
    host:"127.0.0.1", //连接mysql数据库地址
    user:"root",      //连接mysql 用户名
    password:"",      //连接mysql 密码
    database:"XM",//选择操作数据库名称
    port:3306,        //mysql 端口
    connectionLimit:10//连接池10活动连接
});



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./../'));
app.listen(3000,()=>{
    console.log('running')
});
app.use('/header',getHeader);
app.use('/index',getIndex);
app.use('/list',getList);
app.use('/',getProduct);
app.use('/commodity',getShop);
app.use('/commodity',getShoop);
app.use(cookieParser());
app.use(session({
    secret:'1',
    //session过期时间，不易太长。php默认20分钟
    maxAge: 60*60*60*10,
    //可以改变浏览器cookie的名字
    name: 'session'
}));
app.post('/reg/zhuce',(req,res)=>{
    let obj = [req.body.phone,req.body.upwd,req.body.email];
    let body = {phone:req.body.phone};
    let select = ' SELECT * FROM user WHERE phone = ? ';
    pool.query(select,req.body.phone,(err,result)=>{
        if(err) throw err;
        if(result.length < 1){
            let sql = " insert into user values(null,?,?,?,'') ";
            pool.query(sql,obj,(err,result)=>{
                if(err) throw err;
                if(result.affectedRows > 0){
                    req.session.user = body;
                    res.send(true);
                }
            });
            return;
        }
        res.send({code:2,msg:'login.html'});
    });
});
// 1: 已经注册完成 不需要登录了  2：已经存在账号请直接登录
app.post('/reg/denglu',(req,res)=>{
    let obj = [req.body.phone,req.body.upwd];
    let select = ' SELECT * FROM user WHERE phone = ? and upwd = ? ';
    let body = {phone:req.body.phone};
    pool.query(select,obj,(err,result)=>{
        if(err) throw err;
        if(result[0]){
            req.session.user = body;
            res.send({code:1,msg:'/'});
        }else{
            res.send({code:2,msg:false});
        }
    });
});
app.get('/reg/yanzheng',(req,res)=>{
    if(req.session.user){
       res.send({code:1,msg:req.session.user.phone});
    }else{
       res.send({code:2,msg:'login.html'});
    }
});



