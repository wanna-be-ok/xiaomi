window.filll = true;
$(function(){
    new Vue({
        el:'#app',
        data:{
            res:{
                pid:'',
                banner_pic:'',
                lang_pic:'',
                short_pic:'',
                lang_title:'',
                short_title:'',
                lang_p:'',
                short_p:'',
                lang_price:'',
                short_price:'',
                lang_del:'',
                short_del:''
            }
        },
        created(){
            axios.get('http://127.0.0.1:3000/list/phone').then((res)=>{
                this.res = res.data.msg[0];
            });
        }
    });
    let n = 0;
    let timerLb = null;

   //通过点控制轮播
   $('.page-main .channel-focus .ui-wrapper .ui_control .ui-pager-item').on('click','.ui-pager-link',function(){
       clearInterval(timerLb);
       $('.page-main .channel-focus .ui-wrapper .ui_control .ui-pager-item .active').removeClass('active');
       $(this).toggleClass('active');
       n = $(this).html()-1;
       $('.active_show').removeClass('active_show');
       $('.J_channelSlider').find('.slide').eq(n).addClass('active_show');
       timerLb = setInterval(phoneLunbo,5000);
   });
   //轮播主体
   timerLb = setInterval(phoneLunbo,5000);
   function phoneLunbo(){
       n = n>=1 ? 0:n+1;
       $('.active_show').removeClass('active_show');
       $('.page-main .channel-focus .ui-wrapper .ui_control .ui-pager-item .active').removeClass('active');
       $('.J_channelSlider').find('.slide').eq(n).addClass('active_show');
       $('.page-main .channel-focus .ui-wrapper .ui_control .ui-pager-item a').eq(n).addClass('active');
   }
   //左右按钮
   // $('.page-main .channel-focus .ui-wrapper .ui-controls-direction').on('mouseenter','a',function(){
   //     if($(this).hasClass('ui_prev')){
   //         $(this).addClass('ui_zuo');
   //         return;
   //     }
   //     $(this).addClass('ui_you');
   // }).on('mouseleave','a',function(){
   //     if($(this).hasClass('ui_prev')){
   //         $(this).removeClass('ui_zuo');
   //         return;
   //     }
   //     $(this).removeClass('ui_you');
   // }).on('click','a',function(){
   //     clearInterval(timerLb);
   //     if($(this).hasClass('ui_prev')){
   //         n = n<=0 ? 0:n-1;
   //         console.log(n)
   //
   //         $('.active_show').removeClass('active_show');
   //         $('.page-main .channel-focus .ui-wrapper .ui_control .ui-pager-item .active').removeClass('active');
   //         $('.J_channelSlider').find('.slide').eq(n).addClass('active_show');
   //         $('.page-main .channel-focus .ui-wrapper .ui_control .ui-pager-item a').eq(n).addClass('active');
   //     }else{
   //         phoneLunbo();
   //     }
   //
   //     timerLb = setInterval(phoneLunbo,5000);
   // });
   //注意思路
   // function divHover(box,son,classname){
   //     $(box).hover(function(){
   //         $(this).find(son).toggleClass(classname)
   //     })
   // }

});