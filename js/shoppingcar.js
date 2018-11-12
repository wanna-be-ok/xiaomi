$(function(){
    let man = '';
    $.ajax({
        url:"footer.html",
        context: document.body,
        success: function(res){
            $("#footer").append($(res));
            $('<link rel="stylesheet" href="./css/footer.css">\n').insertAfter($('#base'));
            $('<script src="./js/footer.js"><\/script>').appendTo($('head'));
        }
    });
    let cookieUtil = {
        //添加cookie
        setCookie: function (name, value, expires) {
            let cookieText = encodeURIComponent(name) + "=" +
                encodeURIComponent(value);
            let dat = new Date();
            dat.setDate(dat.getDate() + 10);
            expires = dat;
            if (expires && expires instanceof Date) {
                cookieText += "; expires=" + expires;
            }
            document.cookie = cookieText;
        },
        //获取cookie
        getCookie: function (name) {
            let cookieText = decodeURIComponent(document.cookie);
            let cookieArr = cookieText.split("; ");
            for (let i = 0; i < cookieArr.length; i++) {
                let arr = cookieArr[i].split("=");
                if (arr[0] == name) {
                    return arr[1];
                }
            }
            return null;
        },
        //删除cookie
        unsetCookie: function (name) {
            document.cookie = encodeURIComponent(name) + "=; expires=" +
                new Date(0);
        }
    };
    let sir = 0;

    function qzj(){
        let zj = 0;
        let o = 0;
        let num = 0;
        for(let i = 0; i < $('[data-target=info]').length; i++){
            if($($('[data-target=info]')[i]).siblings('.che').find('[data-target=che]').hasClass('checked')){
                zj += parseInt($($('[data-target=info]')[i]).html());
                o += parseInt($($('[data-target=info]')[i]).siblings('.num').find('[data-target=input]').val());
            }
            num += parseInt($($('[data-target=info]')[i]).siblings('.num').find('[data-target=input]').val());
        }
        return {zj:zj,o:o,num:num};
    }
    function jis(){
        let price = $(this).parents('.num').siblings('[data-target=price]').html();
        let input =  $(this).siblings('[data-target=input]');
        let info = $(this).parents('.num').siblings('[data-target=info]');
        let sum = 0;
        let jian = 0;
        let argumentobj = {};
        let zf = 1;
        let pid = $(this).parents('[data-target=getObj]').attr('data-pid');
        if($(this).attr('data-target') === 'jian'){
            if(parseInt(input.val())-1 > 0 ){
                jian = parseInt(input.val())-1
            }else{
                jian = 1
            }
            zf = -1;
        }else if($(this).attr('data-target') === 'jia'){
            if(parseInt(input.val())+1 < 100 ){
                jian = parseInt(input.val())+1
            }else{
                jian = 99
            }
            zf = 1;
        }
        console.log($(this).parents('[data-target=getObj]').attr('data-count'))
        input.val(jian);
        sum = parseInt(price)*jian;
        info.html(`${sum}元`);
        argumentobj = {
            pid : $(this).parents('[data-target=getObj]').attr('data-pid'),
            pname : $(this).parents('[data-target=getObj]').attr('data-pname'),
            count : parseInt($(this).parents('[data-target=getObj]').attr('data-count')),
            price : $(this).parents('[data-target=getObj]').attr('data-price'),
            img : $(this).parents('[data-target=getObj]').attr('data-img')
        };
        console.log(argumentobj)
        addCookie(argumentobj,zf);
        $.ajax({
            url:`/commodity/addShoop/${pid}/${sir}/${zf}`,
            type:'get',
            success:function(result){
                console.log(true);
            }
        });
        //        计算总计
        let zj = qzj();
        $('[data-target=zj]').html(zj.zj);
        $('[data-target=sum]').html(zj.o);
        $('[data-target=num]').html(zj.num);
    }
    function addCookie({pid,pname,price,count,img},zf){
        let arr = cookieUtil.getCookie('SClist') ? JSON.parse(cookieUtil.getCookie('SClist')) : [];
        let i = 0;
        for( ; i < arr.length; i++ ){

            if(arr[i].pid == pid){
                arr[i].count = parseInt(arr[i].count) + parseInt(zf) > 0 ? parseInt(arr[i].count) + parseInt(zf) : 1;
                break;
            }
        }
        if(i== arr.length){
            let obj = {
                pid : pid,
                pname : pname,
                price : price,
                count : count,
                img : img
            };
            arr.push(obj);
        }
        cookieUtil.setCookie('SClist',JSON.stringify(arr),10);
    }
    function delCookie(pid){
        let arr = cookieUtil.getCookie('SClist') ? JSON.parse(cookieUtil.getCookie('SClist')) : [];
        let i = 0;
        for( ; i < arr.length; i++ ){
            if(arr[i].pid == pid){
                arr.splice(i,1);
                break;
            }
        }
        cookieUtil.setCookie('SClist',JSON.stringify(arr),10);
    }
    function init(){
        $('[data-target=all_checked]').on('click',function(){
            $(this).toggleClass('checked');
            $(this).hasClass('checked') ? $('[data-target=che]').addClass('checked') : $('[data-target=che]').removeClass('checked');
            let zj = qzj();
            $('[data-target=zj]').html(zj.zj);
            $('[data-target=sum]').html(zj.o);
            $('[data-target=num]').html(zj.num);
        });
        $('[data-target=che]').on('click',function(){
            let flag = true;
            $(this).toggleClass('checked');
            for(let item of $('[data-target=che]')){
                if(!$(item).hasClass('checked')){
                    flag = false;
                }
            }
            !flag ? $('[data-target=all_checked]').removeClass('checked') : $('[data-target=all_checked]').addClass('checked');
            let zj = qzj();
            $('[data-target=zj]').html(zj.zj);
            $('[data-target=sum]').html(zj.o);
            $('[data-target=num]').html(zj.num);

        });
        $('[data-target=jian]').on('click',jis);
        $('[data-target=jia]').on('click',jis);

//    删除
        $('[data-target=del]').on('click',function(){
            let par = $(this).parents('.item');
            par.remove();
            let obj = {
                pid : $(this).parents('[data-target=getObj]').attr('data-pid'),
                pname : $(this).parents('[data-target=getObj]').attr('data-pname'),
                count : $(this).parents('[data-target=getObj]').attr('data-count'),
                price : $(this).parents('[data-target=getObj]').attr('data-price'),
                img : $(this).parents('[data-target=getObj]').attr('data-img')
            };
            console.log(obj.pid);
            delCookie(obj.pid);
        });
    }
    $.ajax({
        url:'/reg/yanzheng',
        type:'get',
        success:function(res){
            if(res.code === 1){
                sir = res.msg;
                let str = `<span style="color: #b0b0b0;">欢迎 ${sir}</span>`;
                $('.car_header .info').html(str);
                $.ajax({
                    url:'/commodity/shoppingcar',
                    type:'get',
                    data:{
                        phone:sir
                    },
                    success:function(result){
                        console.log(result.msg);
                        if(result.code === 1){
                            cookieUtil.unsetCookie('SClist');
                            if(result.msg.length > 0){
                                for(let i = 0;i < result.msg.length;i++){
                                    addCookie({
                                        pid : result.msg[i].pid,
                                        pname : result.msg[i].pname,
                                        price : result.msg[i].price,
                                        count : result.msg[i].count,
                                        img : result.msg[i].img
                                    });
                                }
                                let cookiearr = cookieUtil.getCookie('SClist');
                                if(cookiearr){
                                    cookiearr=JSON.parse(cookiearr);
                                    let Padd = $('[data-target=Padd]');
                                    for(let i = 0;i < cookiearr.length; i++){
                                        let str = `<div class="item">
                                                   <div class="container" data-target="getObj"  data-pid="${cookiearr[i].pid}" data-pname="${cookiearr[i].pname}" data-price="${cookiearr[i].price}" data-count="${cookiearr[i].count}" data-img="${cookiearr[i].img}">
                                                       <div class="tr clearfix">
                                                           <div class="che">
                                                               <i data-target="che">√</i>
                                                           </div>
                                                           <div class="img">
                                                               <a href="javascript:;" >
                                                                   <img src="${cookiearr[i].img}" alt="">
                                                               </a>
                                                           </div>
                                                           <div class="name">
                                                               <h3>  ${cookiearr[i].pname}  </h3>
                                                           </div>
                                                           <div class="price" data-target="price">${cookiearr[i].price}元</div>
                                                           <div class="num">
                                                               <div>
                                                                   <a href="javascript:;" data-target="jian" >
                                                                       <i><img src="./images/shoppingcar/-.png" alt=""></i>
                                                                   </a>
                                                               <input type="text" autocomplete="off" value="${cookiearr[i].count}" data-target="input">
                                                               <a href="javascript:;" data-target="jia" >
                                                                   <i><img src="./images/shoppingcar/+.png" alt=""></i>
                                                               </a>
                                                               </div>
                                                           </div>
                                                           <div class="info" data-target="info">${cookiearr[i].count * cookiearr[i].price}元</div>
                                                           <div class="action"><a href="javascript:;" data-target="del" ><i></i></a></div>
                                                       </div>
                                                   </div>
                                                </div>`;
                                        Padd.append($(str));
                                    }
                                }
                            }
                            init();
                        }else{
                            let cookiearr = cookieUtil.getCookie('SClist');
                            if(cookiearr){
                                cookiearr=JSON.parse(cookiearr);
                                let Padd = $('[data-target=Padd]');
                                for(let i = 0;i < cookiearr.length; i++){
                                    let str = `<div class="item">
                   <div class="container" data-target="getObj"  data-pid="${cookiearr[i].pid}" data-pname="${cookiearr[i].pname}" data-price="${cookiearr[i].price}" data-count="${cookiearr[i].count}" data-img="${cookiearr[i].img}">
                       <div class="tr clearfix">
                           <div class="che">
                               <i data-target="che">√</i>
                           </div>
                           <div class="img">
                               <a href="javascript:;" >
                                   <img src="${cookiearr[i].img}" alt="">
                               </a>
                           </div>
                           <div class="name">
                               <h3>  ${cookiearr[i].pname}  </h3>
                           </div>
                           <div class="price" data-target="price">${cookiearr[i].price}元</div>
                           <div class="num">
                               <div>
                                   <a href="javascript:;" data-target="jian" >
                                       <i><img src="./images/shoppingcar/-.png" alt=""></i>
                                   </a>
                               <input type="text" autocomplete="off" value="${cookiearr[i].count}" data-target="input">
                               <a href="javascript:;" data-target="jia" >
                                   <i><img src="./images/shoppingcar/+.png" alt=""></i>
                               </a>
                               </div>
                           </div>
                           <div class="info" data-target="info">${cookiearr[i].count * cookiearr[i].price}元</div>
                           <div class="action"><a href="javascript:;" data-target="del" ><i></i></a></div>
                       </div>
                   </div>
                </div>`;
                                    Padd.append($(str));
                                }
                            }
                            console.log('end');
                        }
                    }
                });
            }
            else{
                let cookiearr = cookieUtil.getCookie('SClist');
                if(cookiearr){
                    cookiearr=JSON.parse(cookiearr);
                    let Padd = $('[data-target=Padd]');
                    for(let i = 0;i < cookiearr.length; i++){
                        let str = `<div class="item">
                   <div class="container" data-target="getObj"  data-pid="${cookiearr[i].pid}" data-pname="${cookiearr[i].pname}" data-price="${cookiearr[i].price}" data-count="${cookiearr[i].count}" data-img="${cookiearr[i].img}">
                       <div class="tr clearfix">
                           <div class="che">
                               <i data-target="che">√</i>
                           </div>
                           <div class="img">
                               <a href="javascript:;" >
                                   <img src="${cookiearr[i].img}" alt="">
                               </a>
                           </div>
                           <div class="name">
                               <h3>  ${cookiearr[i].pname}  </h3>
                           </div>
                           <div class="price" data-target="price">${cookiearr[i].price}元</div>
                           <div class="num">
                               <div>
                                   <a href="javascript:;" data-target="jian" >
                                       <i><img src="./images/shoppingcar/-.png" alt=""></i>
                                   </a>
                               <input type="text" autocomplete="off" value="${cookiearr[i].count}" data-target="input">
                               <a href="javascript:;" data-target="jia" >
                                   <i><img src="./images/shoppingcar/+.png" alt=""></i>
                               </a>
                               </div>
                           </div>
                           <div class="info" data-target="info">${cookiearr[i].count * cookiearr[i].price}元</div>
                           <div class="action"><a href="javascript:;" data-target="del" ><i></i></a></div>
                       </div>
                   </div>
                </div>`;
                        Padd.append($(str));
                    }
                }
                init();
            }
        }
    });
});
    // $.ajax({
    //     url:'http://127.0.0.1:3000/commodity/shoppingcar',
    //     type:'get',
    //     success:function(res){
    //         //判断是否登录  登录了 发送ajax 请求完了 删除cookie 创建新的cookie  然后重新渲染
    //         cookieUtil.unsetCookie('SClist');
    //         for(let i = 0;i < res.msg.length;i++){
    //             addCookie({
    //                 pid : res.msg[i].pid,
    //                 pname : res.msg[i].pname,
    //                 price : res.msg[i].price,
    //                 count : res.msg[i].count,
    //                 img : res.msg[i].img
    //             });
    //         }
    //         let cookiearr = cookieUtil.getCookie('SClist');
    //         if(cookiearr){
    //             cookiearr=JSON.parse(cookiearr);
    //             let Padd = $('[data-target=Padd]');
    //             for(let i = 0;i < cookiearr.length; i++){
    //                 let str = `<div class="item">
    //                <div class="container" data-target="getObj"  data-pid="${cookiearr[i].pid}" data-pname="${cookiearr[i].pname}" data-price="${cookiearr[i].price}" data-count="${cookiearr[i].count}" data-img="${cookiearr[i].img}">
    //                    <div class="tr clearfix">
    //                        <div class="che">
    //                            <i data-target="che">√</i>
    //                        </div>
    //                        <div class="img">
    //                            <a href="javascript:;" >
    //                                <img src="${cookiearr[i].img}" alt="">
    //                            </a>
    //                        </div>
    //                        <div class="name">
    //                            <h3>  ${cookiearr[i].pname}  </h3>
    //                        </div>
    //                        <div class="price" data-target="price">${cookiearr[i].price}元</div>
    //                        <div class="num">
    //                            <div>
    //                                <a href="javascript:;" data-target="jian" >
    //                                    <i><img src="./images/shoppingcar/-.png" alt=""></i>
    //                                </a>
    //                            <input type="text" autocomplete="off" value="${cookiearr[i].count}" data-target="input">
    //                            <a href="javascript:;" data-target="jia" >
    //                                <i><img src="./images/shoppingcar/+.png" alt=""></i>
    //                            </a>
    //                            </div>
    //                        </div>
    //                        <div class="info" data-target="info">${cookiearr[i].count * cookiearr[i].price}元</div>
    //                        <div class="action"><a href="javascript:;" data-target="del" ><i></i></a></div>
    //                    </div>
    //                </div>
    //             </div>`;
    //                 Padd.append($(str));
    //             }
    //         };
    //         init();
    //     }
    // });

//    全选


//操作cookie 实现购物车操作  其实  是用用一个name保存所有的购物车中的商品  商品保存的信息 ：{pid \ pname \price  \ count \ img }

    //


// addCookie({
//     pid : 1,
//     pname : ' 小米蓝牙语音遥控器 ',
//     price : 99,
//     count : 1,
//     img : './images/shoppingcar/pms_1531991434.63466813!80x80.jpg'
// });
// addCookie({
//     pid : 2,
//     pname : '   小米万能遥控器   ',
//     price : 79,
//     count : 1,
//     img : './images/shoppingcar/T1IbxgBgLT1RXrhCrK!80x80.jpg'
// });
// addCookie({
//     pid : 3,
//     pname : '  小米8 青春 全网通版 4GB内存 深空灰 64GB  ',
//     price : 1399,
//     count : 1,
//     img : './images/shoppingcar/pms_1537323963.1278763!80x80.jpg'
// });
// addCookie({
//     pid : 4,
//     pname : '  小米电视4A 65英寸 黑色 65英寸  ',
//     price : 3399,
//     count : 1,
//     img : './images/shoppingcar/pms_1535103027.24861415!80x80.jpg'
// });
// addCookie({
//     pid : 5,
//     pname : '  15.6"小米笔记本Pro i5 8G MX150 深空灰   ',
//     price : 5599,
//     count : 1,
//     img : './images/shoppingcar/pms_1505897592.73836006!80x80.jpg'
// });
// addCookie({
//     pid : 6,
//     pname : '  悦米机械键盘 白色   ',
//     price : 289,
//     count : 1,
//     img : './images/shoppingcar/pms_1490702347.3628109!80x80.png'
// });