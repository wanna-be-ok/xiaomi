window.filll = false;
 $(function(){
    new Vue({
        el:"#appindex",
        data:{
            res:{
                banner_pic:'',
                banner_bottom:'',
                shan_title:'',
                shan_p:'',
                shan_pic:'',
                shan_price:'',
                shan_del:'',
                max:'',
                ren_desc:'',
                ren_p:'',
                ren_title:'',
                ren_price:'',
                ren_pic:''
            },
            big:{
                pid:'',
                sj_max:'',
                sj_min:'',
                sj_title:'',
                sj_p:'',
                sj_price:'',
                left_pic:'',
                jd_pic:'',
                jd_title:'',
                jd_desc:'',
                jd_price:'',
                jd_review:'',
                jd_athor:''
            },
            bottom:{
                pic:'',
                title:'',
                p:'',
                h2:''
            }
        },
        created(){
            axios.get('http://127.0.0.1:3000/index/small').then((result)=>{
                this.res = result.data.msg[0];
            });
            axios.get('http://127.0.0.1:3000/index/big').then((res)=>{
                this.big = res.data.msg[0];
                setTimeout(jdInit)
            });
            axios.get('http://127.0.0.1:3000/index/bottom').then((res)=>{
                this.bottom = res.data.msg[0];
                setTimeout(nrInit)

            });
        }
    });

    function Lunbo(dianBox,slide,slide_hide,ui_prev,control_zuoyou,time=2000,timer='timer',n=0){
        this.dianBox = $(dianBox);
        this.n=n;
        this.slide = $(slide);
        this.slide_hide = $(slide_hide);
        this.time = time;
        this.ui_prev = $(ui_prev);
        this.control_zuoyou = $(control_zuoyou);
        this.timer = timer;
    }
    Lunbo.prototype.init=function(){
        let that = this;
        that.bannerM=function(){    //要被调用的方法应该写到原型中 不然this会出现问题
            that.n < 4 ? that.n++ : that.n = 0;
            that.slide.eq(that.n).addClass('slide_hide').siblings().removeClass('slide_hide');
            $('.a_hover').removeClass('a_hover');
            that.dianBox.find('.ui_item>a').eq(that.n).addClass('a_hover');
        };
        that.timer = setInterval(that.bannerM,that.time);
        // 是不是应该把方法写的具体一点还是 写到一起
        that.dianBox.on('click','.ui_item',function(){
            that.n = $(this).index();
            that.slide.eq(that.n).addClass('slide_hide').siblings().removeClass('slide_hide');
            $('.a_hover').removeClass('a_hover');
            $(this).find('a').addClass('a_hover');
        }).on('mouseenter',function(){
            clearInterval(that.timer);
            that.timer = null;
        }).on('mouseleave',function(){
            that.timer = setInterval(that.bannerM,that.time);
        }).on('mouseenter','div>a',function(){
            $(this).addClass('a_hover')
        }).on('mouseleave','div>a',function(){
            $(this).removeClass('a_hover');
            $('.ui_item>a').eq(that.n).addClass('a_hover')
        });
        that.zuoyou(that.bannerM);
    };
    Lunbo.prototype.zuoyou=function(clear){
        let that = this;
        this.control_zuoyou.on('click','a',function(){
            let $btn = $(this);
            if($btn.attr('class') == "ui_prev" ) that.n > 0 ? that.n-- : that.n = 4;
                else that.n < 4 ? that.n++ : that.n = 0;
                that.slide.eq(that.n).addClass('slide_hide').siblings().removeClass('slide_hide')
                $('.a_hover').removeClass('a_hover');
                $('.ui_item>a').eq(that.n).addClass('a_hover')
            }).hover(function(){
                clearInterval(that.timer);
                that.timer = null;
                },function(){
                    that.timer = setInterval(that.bannerM,that.time);
            });
        this.control_zuoyou.hover(function(e){
            if($(e.target).attr('data-control') == 'ui_prev'){
                $(this).find('a.ui_prev').toggleClass('hover_change_zuo')
            }else{
                $(this).find('a.ui_next').toggleClass('hover_change_you')
            }
        })
    };
    let banner = new Lunbo('.control_dian','.slide','.slide_hide','.ui_prev','.control_zuoyou');
    banner.init();

//     轮播下边的广告
//     倒计时 等一下在写

//     左边的banner
     let fast_num = 0;
     $('.home_super .fast .fast_box .box_hd .fast_more').on('click','a',function(){
         if($(this).hasClass("prev")){
            if(fast_num === 0 )return;
            if(fast_num > 0){
                $(this).removeClass('prevdark');
                if((fast_num -= 4) > 0 ){
                    $(this).addClass('prevdark');
                    $(this).next().removeClass('nextlight');
                }else{
                    fast_num = 0;
                    $(this).removeClass('prevdark');
                    $(this).next().removeClass('nextlight');
                }
            }
         }else if($(this).hasClass("next")){
             if(fast_num === 10 ) return;
             if(fast_num < 10){
                 $(this).removeClass('nextlight');
                 if((fast_num += 4) < 8){
                     $(this).prev().addClass('prevdark');
                 }else{
                     fast_num = 5;
                     $(this).addClass('nextlight');
                     $(this).prev().addClass('prevdark');
                 }
             }
         }
         $('.home_super .fast .fast_s').css({"margin-left":-248 * fast_num})
     }).on('mouseenter','a',function(){
         if($(this).hasClass("prev")){
             if(fast_num > 0){
                 $(this).addClass('prevShow');
             }
         }else if($(this).hasClass("next")){
             if(fast_num < 5){
                 $(this).addClass('nextShow')
             }
         }
     }).on('mouseleave','a',function(){
         if($(this).hasClass("prev")){
             $(this).removeClass('prevShow')
         }else if($(this).hasClass("next")){
             $(this).removeClass('nextShow')
         }
     });

     let mubiaoMonth = new Date().getMonth();
     let mubiaoDate = new Date().getDate();
     setInterval(function(){
         var time = new Date(2018,mubiaoMonth+1,mubiaoDate,20,0,0).getTime() - new Date().getTime();
         var s = parseInt(time/1000%60) >= 10 ? parseInt(time/1000%60) : '0'+parseInt(time/1000%60);
         var m = parseInt(time/1000/60%60) >= 10 ? parseInt(time/1000/60%60) : '0'+parseInt(time/1000/60%60);
         var h = parseInt(time/1000/60/60%24) >= 10 ? parseInt(time/1000/60/60%24) : '0'+parseInt(time/1000/60/60%24);
         $('.home_super .fast .fast_box .box_bd .fast_content .time_box .nock .shi').html(h);
         $('.home_super .fast .fast_box .box_bd .fast_content .time_box .nock .fen').html(m);
         $('.home_super .fast .fast_box .box_bd .fast_content .time_box .nock .miao').html(s);
     },1000);


//     手动广告
     function jdInit(){
         $('.home_main .main_container .main_sbox .box_bd .row .span_rt .b_uist:first-child').addClass('show_ul');

         $('.home_main .main_container .main_sbox .box_bd .row .span_rt li').on({
                 'mouseenter':function(){
                     $(this).find('.pic').addClass('pic_show').attr('data-weisha',"15");
                 },
                 'mouseleave':function(){
                     $(this).find('.pic').removeClass('pic_show')
                 }
             });
     }
     function nrInit(){
         $('.home_main .main_container .main_sbox .box_hd .more .tab_list').on('mouseenter','li',function(){
             $('.active_li').removeClass('active_li');
             $(this).addClass('active_li');
             $('.show_ul').removeClass('show_ul');
             $('.home_main .main_container .main_sbox .box_bd .row .span_rt .b_uist').eq($(this).index()).addClass('show_ul');
         });
         $('.home_main .main_container .n_rong .box_bd .content_list').on('mouseenter','li',function(){
             $(this).find('.cczy a').addClass('a_op');
         }).on('mouseleave','li',function(){
             $(this).find('.cczy a').removeClass('a_op');
         });
         $('.home_main .main_container .n_rong .box_bd .content_list .content_item .cctrl .sm_ctr .page:first-child .dot').addClass('a_or');
         $('.home_main .main_container .n_rong .box_bd .content_list .content_item .cctrl .sm_ctr').on('click','.page',function(){
             let num = $(this).index();
             console.log(num)
             $(this).parent().find('.a_or').removeClass('a_or');
             $(this).find('span').addClass('a_or');
             $(this).parent().parent().parent().find('.c_lb_list').css({'marginLeft':-num*296});
         });
         $('.home_main .main_container .n_rong .box_bd .content_list .content_item .cczy').on('click','a',function(){
             let index = $(this).parent().parent().find('.a_or');
             if($(this).hasClass('ccprev')){
                 if(index.parent().prev().length > 0){
                     index.parent().find('.a_or').removeClass('a_or');
                     index.parent().prev().find('.dot').addClass('a_or');
                     $(this).parent().parent().find('.c_lb_list').css({'marginLeft':(index.html()-2)*-296});
                 }
             }else if($(this).hasClass('next')){
                 if(index.parent().next().length > 0){
                     index.parent().find('.a_or').removeClass('a_or');
                     index.parent().next().find('.dot').addClass('a_or');
                     $(this).parent().parent().find('.c_lb_list').css({'marginLeft':(index.html())*-296});
                 }
             }
         });
     }

});