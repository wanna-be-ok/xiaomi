$(function(){
    $.ajax({
        url:'/reg/yanzheng',
        type:'get',
        success:function(res){
            if(res.code === 1){
                console.log(res)
                let sir = res.msg;
                let str = `
                    <span style="color: #b0b0b0;">欢迎 ${sir}</span>
                    <span class="sep">|</span>
                    <a href="javscript:;">消息通知</a>
                    `;
                $('header .topbar .container').find('.topbar-info').html(str)
            }
        }
    });

    function go1(){
        let timer = null;
        let flag = false;
        $('.figure>a>img').each(function(){
            $(this).attr('src',$(this).attr('data-image'))
        });
        //通过判断是不是含有固定class 决定是否执行动画
        $('[data-tirrget=ul_item_event]').on({
            mouseleave:function(e){
                $('.show_item').removeClass('show_item');
                $('.noanimation_item').removeClass('noanimation_item');
                $('.clear_item').removeClass('clear_item');
            }
        });
        $('[data-tirrget=li_event]').on({
            mouseenter:function(){
                let that = this;
                $(this).find('a').addClass('color');
                if($('.box_li>.show_item').length<1){
                    timer = setTimeout(function(){
                        $(that).find('.item_children').addClass('show_item');
                        flag = true;
                        return;
                    },300)
                }else if( $(that).find('.item_children').length<1){
                    $('.item_children').addClass('clear_item').removeClass('show_item').removeClass('noanimation_item');
                    return;
                }else if(flag){
                    $(that).find('.item_children').addClass('noanimation_item');
                }
            },
            mouseleave:function(){
                clearTimeout(timer);
                timer = null;
                $(this).find('a').removeClass('color');
                $('.noanimation_item').removeClass('noanimation_item');
                $('.clear_item').removeClass('clear_item')
            }
        });
        $('.super_nav').on('mouseenter',function(){if(filll){$('.super_possible').show()}
        }).on('mouseleave',function(){
            if(filll){
                $('.super_possible').hide()
            }
        });



    }
    function go2(){
        //侧边栏 菜单
        $('[data-tirrget=ul_super_list]').on('mouseenter','.super_li',function(){
            $(this).addClass('show_background hover_superli_color')
                .find('.children').addClass('show_div')
        }).on('mouseleave','.super_li',function(){
            $(this).removeClass('show_background hover_superli_color').find('.children').removeClass('show_div')
        }).on('mouseenter','.children>ul>li>a',function(){
            $(this).addClass('super_a_hoer')
        }).on('mouseleave','.children>ul>li>a',function(){
            $(this).removeClass('super_a_hoer')
        });
        $('[ data-tirrget=search] form .search-text').on({
            focus:function(){
                $(this).addClass('search_input_hover')
                    .next()
                    .addClass('search_input_hover')
                    .next('.search-hot-words')
                    .addClass('hidden')
                    .parent()
                    .children('.key_word_list')
                    .addClass('search_list_hover')
            },
            keyup:function(e){
                let lis = $(this).parents('form').find('.key_word_list li');
                let val = '';
                let num = '';
                for(let i = 0;i < lis.length;i++){
                    val = $(lis[i]).attr('data-key').indexOf($(this).val());

                    if(val === -1){
                        $(lis[i]).hide();
                    }else{
                        $(lis[i]).show();
                        num = $(lis[i]).attr('data-key').indexOf($(this).val());

                    }
                }
                if(e.keyCode == 13){
                    let url = '';
                    console.log(num);
                    switch(num){
                        case -1 : url = false;break;
                        default : url = $(this).val().indexOf('手') > -1 ? 'http://127.0.0.1:3000/phone.html' : $(this).val().indexOf('笔') > -1 ? 'http://127.0.0.1:3000/shopping.html?2' : $(this).val().indexOf('净') > -1 ?'http://127.0.0.1:3000/shopping.html?1' :$(this).val().indexOf('红') > -1?'http://127.0.0.1:3000/phone.html' :$(this).val().indexOf('视') > -1?'http://127.0.0.1:3000/shopping.html?4' :'http://127.0.0.1:3000/shopping.html?3';
                    }
                    if(url && $(this).val() !== ''){
                        location.href=url;
                    }
                }
            }
            // blur:function(){
            //     $('.search_input_hover').removeClass('search_input_hover');
            //     $('.search_list_hover').removeClass('search_list_hover');
            //     $('.search-hot-words').removeClass('hidden');
            // }
        });
        $('[ data-tirrget=search] form').on('keydown',function(e){
            if(e.keyCode == 13){
                e.preventDefault();
            }
        });

    }
    new Vue({
        el:'#app1',
        data:{
            res:null,
            slider:null,
            user:{
                phone:'',
                email:'',
                upwd:''
            }
        },
        created(){
            axios.get('http://127.0.0.1:3000/header/nav').then((result)=>{
                this.res = result.data.msg;
            });
            axios.get('http://127.0.0.1:3000/header/slider').then((result)=>{
                this.slider = result.data.msg;
                setTimeout(go1);
                setTimeout(go2);
            });
        }
    });
});
