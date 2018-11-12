window.filll = true;
$(function(){
    let lid = location.search.split('?')[1];
    let zf = 1;
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
            console.log(1);
            document.cookie = encodeURIComponent(name) + "=; expires=" +
                new Date(0);
        }
    };
    function addCookie({pid,pname,price,count,img},zf){
        let arr = cookieUtil.getCookie('SClist') ? JSON.parse(cookieUtil.getCookie('SClist')) : [];
        let i = 0;
        for( ; i < arr.length; i++ ){
            console.log('add1')
            if(arr[i].pid == pid){
                console.log('add2')

                arr[i].count = arr[i].count + zf > 0 ? arr[i].count + zf : 1;
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

    new Vue({
        el:'#app',
        data:{
            res:{
                pid:'',
                c_h1:'',
                c_orange:'',
                c_title:'',
                c_price:'',
                c_banben:'',
                c_color:'',
                c_bx:'',
                c_bxnr:'',
                c_img:''
            },
            zj:{
                title1:``,
                price1:``,
                bxnr:``,
                price2:``,
                price3:``
            }
        },
        created(){
            axios.get(`http://127.0.0.1:3000/commodity/shop/${lid}`).then(result=>{
                this.res = result.data.msg[0];
                let that = this;
                let po = 0;
                $(window).scroll(function(){
                    po = $(window).scrollTop();
                });
                setTimeout(function(){
                    let jx = $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_img .ui_slide img ').length - 1 ;
                    $('a').click(function(e){
                        e.preventDefault();
                    });
                    let gunm = 0;
                    let gunP = setInterval(function(){
                        gunm += 1;
                        $(window).scrollTop(gunm);
                        if(gunm > 203){
                            clearInterval(gunP);
                            return;
                        }
                        if(po > 203){
                            clearInterval(gunP);
                            return;
                        }
                    });

                    $(document).scroll(function(){
                        // console.log($(this).scrollTop())
                        if($(this).scrollTop()>=203){
                            $('#p_fixed').addClass('p_dow');
                        }else{
                            $('#p_fixed').removeClass('p_dow');
                        }
                    });
                    let SPlunbo = null;
                    let spnum = 0;
                    $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_img .ui_slide img:nth-child(1) ').addClass('show_img');
                    $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_ctrl .page .page_item:nth-child(1)').find('a').addClass('active');
                    let syidong = function(){
                        $('.show_img').removeClass('show_img');
                        $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_img .ui_slide img ').eq(spnum).addClass('show_img');
                        $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_ctrl .page .page_item a.active').removeClass('active');
                        $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_ctrl .page .page_item').eq(spnum).find('a').addClass('active');
                    };
                    let slunbofun = function(){
                        spnum = ++spnum > jx ? 0 : spnum;
                        syidong();
                    };
                    let gdflag = true;

                    //左侧的轮播
                    SPlunbo = setInterval(slunbofun,3000);
                    $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_ctrl').on('click','a',function(){
                        clearInterval(SPlunbo);
                        SPlunbo = null;
                        if($(this).hasClass('prev')){
                            spnum = --spnum < 0 ? jx : spnum;

                        }else if($(this).hasClass('next')){
                            spnum = ++spnum > jx ? 0 : spnum;
                        }
                        syidong();
                        SPlunbo = setInterval(slunbofun,3000);
                    });
                    $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_ctrl .page').on('click','.page_item',function(){
                        spnum = $(this).index();
                        clearInterval(SPlunbo);
                        SPlunbo = null;
                        syidong();
                        SPlunbo = setInterval(slunbofun,3000);
                    });
                    let xg = $('#footer').offset().top - $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_img .ui_slide img ').height() -30;
                    $(window).scroll(function(){
                        let num = $(this).scrollTop();
                        if(num > xg){
                            gdflag = false;
                            $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_ctrl').css('display','none');
                        }else {
                            gdflag = true;
                            $('.bay_box .box .pro_center .l_view .l_box .box_img .ui_ctrl').css('display','block');
                        }
                        if(num >= 203 && gdflag){
                            $('.bay_box .box .pro_center .l_view').css({
                                "top":num-203
                            });
                        }
                    });
                    //右侧的一些点击按钮
                    $('.bay_box .box .pro_center .r_view .main_box .bb_box .set_list li:nth-child(1)').addClass('active_btn')
                    $('.bay_box .box .pro_center .r_view .main_box .bb_box .set_list').on('click','.btn',function(){
                        $('.bay_box .box .pro_center .r_view .main_box .bb_box .set_list .btn.active_btn').removeClass('active_btn');
                        $(this).addClass('active_btn');
                        zj();
                    });
                    $('.bay_box .box .pro_center .r_view .main_box .bx_box ul').on('click','li',function(){
                        $('.bay_box .box .pro_center .r_view .main_box .bx_box ul li.active_li').removeClass('active_li');
                        $(this).addClass('active_li');
                        zj();
                    });
                    $('.bay_box .box .pro_center .r_view .main_box .color_box .set_list_color').on('click','.btn',function(){
                        $('.bay_box .box .pro_center .r_view .main_box .color_box .set_list_color .btn.btn_show').removeClass('btn_show');
                        $(this).addClass('btn_show');
                        zj();
                    });
                    $('.bay_box .box .pro_center .r_view .main_box .bx_box ul li:nth-child(1)').addClass('active_li');
                    function zj(){
                        let price = 0;
                        let banben = '';
                        let bxprice = 0;
                        let bx = '';
                        let color = '';
                        if($('.bay_box .box .pro_center .r_view .main_box .bb_box .set_list .btn.active_btn').length > 0){
                            price = parseInt($('.bay_box .box .pro_center .r_view .main_box .bb_box .set_list .btn.active_btn').find('.price').html().trim());
                            banben = $('.bay_box .box .pro_center .r_view .main_box .bb_box .set_list .btn.active_btn').find('.name').html();
                        }else if($('.bay_box .box .pro_center .r_view .price_box .price').length > 0){
                            price  = parseInt($('.bay_box .box .pro_center .r_view .price_box .price').html().trim());
                        }
                        if($('.bay_box .box .pro_center .r_view .main_box .bx_box ul li.active_li').length > 0 ){
                            bxprice = parseInt($('.bay_box .box .pro_center .r_view .main_box .bx_box ul li.active_li').find('.price').html().trim());
                            bx = $('.bay_box .box .pro_center .r_view .main_box .bx_box ul li.active_li').find('.name').html().split('&')[0];
                        }
                        if($('.bay_box .box .pro_center .r_view .main_box .color_box .set_list_color .btn.btn_show').length > 0 ){
                            color = $('.bay_box .box .pro_center .r_view .main_box .color_box .set_list_color .btn.btn_show').find('a').html().split('>')[1].trim();
                        }
                        that.zj = {
                            title1:`${banben + color}`,
                            price1:`${price}`,
                            bxnr:`${bx}`,
                            price2:`${bxprice}`,
                            price3:`${price + bxprice}`
                        };
                    }
                    zj();
                    $('.bay_box .box .pro_center .r_view .main_box .btn_buy .gwc').on('click',function(){
                        $.ajax({
                            url:'/reg/yanzheng',
                            type:'get',
                            success:function(res){
                                if(res.code === 1){
                                    let sir = res.msg;
                                    $.ajax({
                                        url:`/commodity/addShoop/${$('.bay_box .box .pro_center .r_view .main_box .btn_buy .gwc').attr('data-id')}/${sir}`,
                                        type:'get',
                                        success:function(result){
                                            console.log(result);
                                            if(result.code === 1){
                                                cookieUtil.unsetCookie('SClist');
                                                if(result.msg.length > 0){
                                                    for(let i = 0;i < res.msg.length;i++){
                                                        addCookie({
                                                            pid : res.msg[i].pid,
                                                            pname : res.msg[i].pname,
                                                            price : res.msg[i].price,
                                                            count : res.msg[i].count,
                                                            img : res.msg[i].img
                                                        },1);
                                                    }

                                                }
                                            }
                                        }
                                    });
                                }
                                else{
                                    let cookiearr = cookieUtil.getCookie('SClist');
                                    console.log(cookiearr);
                                    $.ajax({
                                        url:'http://127.0.0.1:3000/commodity/shoop/'+$('.bay_box .box .pro_center .r_view .main_box .btn_buy .gwc').attr('data-id'),
                                        type:'get',
                                        success:function(res){
                                            addCookie({
                                                pid:res.msg[0].id,
                                                pname:res.msg[0].pname,
                                                price:res.msg[0].price,
                                                count:res.msg[0].count,
                                                img:res.msg[0].img
                                            },1)
                                        }
                                    });

                                }
                                location.href='/shoppingcar.html'
                            }
                        });

                    })
                })
            })
        }
    });



});