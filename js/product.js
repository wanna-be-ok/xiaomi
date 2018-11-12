window.filll = true;

$(function(){
    new Vue({
        el:'#app',
        data:{
            res:{
                pid:'',
                banner1:'',
                banner1_pic:'',
                banner1_h2:'',
                banner1_p:'',
                banner1_price:'',
                banner1_del:'',
                banner2:'',
                banner2_h2:'',
                banner2_p:'',
                banner3:'',
                banner4:'',
                banner4_h2:'',
                banner4_p1:'',
                banner4_h3:'',
                banner4_p2:'',
                ul:'',
                slid1:'',
                slid1_h2:'',
                slid1_h3:'',
                slid1_name:'',
                slid1_tips:'',
                slid1_p:'',
                slid2_h2:'',
                slid2_p:'',
                slid3:'',
                slid3_h2:'',
                slid3_p:'',
                video:'',
                video_pic:'',
                video_v:'',
                video_h2:'',
                video_p:'',
                video_small:'',
                slid4_pic:'',
                slid4_title:'',
                slid4_h2:'',
                slid4_p:'',
                slid5_h2:'',
                slid5_p:'',
                slid6_pic:'',
                slid6_h2:'',
                slid6_p:'',
                slid7_h2:'',
                slid7_p:'',
                slid8_h2:'',
                slid8_p:'',
                slid9_h2:'',
                slid9_p:'',
                slid10_h2:'',
                slid10_p:'',
                img_1:'',
                img_2:'',
                img_3:'',
                img_4:'',
                img_5:'',
                img_6:'',
                img_7:'',
                img_8:'',
                img_9:''
            }
        },
        created(){
            axios.get('http://127.0.0.1:3000/product').then((res)=>{
                this.res=res.data.msg[0];
                console.log(this.res);
                setTimeout(qufInit(),1);
            });
        }
    });


    function qufInit(){
        $('a').on('click',function(e){
            if($(this).hasClass('p_btn_small')) return;
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
        });
        // 轮播面向对象编程 ： 1：装图片的盒子 2：小点点 3：装小点的父元素 4：小点的选择器 5：几张图-1 6：图片的选择器 7：左右
        // 8：接受白和黑两种颜色的盒子
        // 9：show白10：show黑11：定时器名称：12：shou图片class13：shou点class14：没啥用的n从零开始 计算第几张图（第几个小点）
        // 利用有没有小盒子lielement是不是为‘’ 判断是渐变还是 无缝滚动
        function Lunbo(uiElement,ctrlElementD,ctrlDBox,ctrlD,m,liElement='',ctrlElementZY='',JSB_W='',Bactive='',Wactive='',timer='timer',showPic='',showD='',showZY='',n=0){
            this.uiElement=uiElement;
            this.liElement=liElement;
            this.ctrlElementD=ctrlElementD;
            this.ctrlDBox=ctrlDBox;
            this.ctrlD=ctrlD;
            this.ctrlElementZY=ctrlElementZY;
            this.showD=showD;
            this.showZY=showZY;
            this.showPic=showPic;
            this.n=n;
            this.m=m;
            this.timer=timer;
            this.Bactive=Bactive;
            this.Wactive=Wactive;
            this.JSB_W=JSB_W;
        }
        Lunbo.prototype.W_B=function(){
            if(this.Bactive == '' && this.Wactive == '') return;
            if(this.n==0){$(this.JSB_W).removeClass(this.Wactive).addClass(this.Bactive);}
            else{$(this.JSB_W).addClass(this.Wactive).removeClass(this.Bactive);}
        };
        Lunbo.prototype.ctrlZY=function(){
            if(this.ctrlElementZY == '') return;
            $(this.ctrlElementZY).hover(()=>{
                $(this).toggleClass(this.showZY)
            })
        };
        Lunbo.prototype.moveLb=function(lthat){
            return function(){
                lthat.n= ++lthat.n > lthat.m ? 0 : lthat.n;
                $(`.${lthat.showPic}`).removeClass(lthat.showPic);
                $(lthat.uiElement).find(lthat.liElement).eq(lthat.n).addClass(lthat.showPic);
                $(`.${lthat.showD}`).removeClass(lthat.showD);
                $(lthat.ctrlElementD).eq(lthat.n).addClass(lthat.showD);
                lthat.W_B();

            }
        };
        Lunbo.prototype.Dclick=function(){
            let that = this;
            $(that.ctrlDBox).on('click',`.${that.ctrlD}`,function(){
                console.log('click')

                clearInterval(that.timer);
                that.timer=null;
                that.n = $(this).index()-1;
                that.moveLb(that)();
                that.timer = setInterval(that.moveLb(that),5000);
            })
        };
        Lunbo.prototype.init=function(){
            this.timer=setInterval(this.moveLb(this),5000);
            this.ctrlZY();
            this.Dclick();
        };
        //第一个轮播
        let lb = new Lunbo('.mi8_index .section .con .wper .img_banner .img_list ',
            '.mi8_index .section .con .wper .control_banner .ui_item a',
            '.mi8_index .section .con .wper .control_banner',
            'ui_item',
            2,
            '.slider',
            '',
            '.mi8_index .section .txt_banner',
            'txt_banner_white',
            'txt_banner_black',
            '',
            'slider_active',
            'b_a_active',
            '',
            0
        );
        lb.init();
        //第二个轮播
        let lb1 = new Lunbo('.mi8_index .section1 .con1 .wper .img_banner .img_list ',
            '.mi8_index .section1 .con1 .wper .control_banner .ui_item1 a',
            '.mi8_index .section1 .con1 .wper .control_banner',
            'ui_item1',
            3,
            '.slider1',
            '',
            '.mi8_index .section1 .txt_banner1',
            'txt_banner_white1',
            'txt_banner_black1',
            '',
            'slider_active1',
            'b_a_active1',
            '',
            0
        );
        lb1.init();
        //第三个轮播
        let lb2 = new Lunbo('.mi8_index .section4 .section_con .ui_warp .ui_view ul ',
            '.mi8_index .section4 .section_con .ui_warp .ui_ctrl .ui_pager .ui-pager-item a',
            '.mi8_index .section4 .section_con .ui_warp .ui_ctrl .ui_pager',
            'ui-pager-item',
            4,
            '.silder2',
            '',
            '',
            '',
            '',
            '',
            'show_s_li',
            'show_s_a',
            '',
            0
        );
        lb2.init();

        $(document).scroll(function(){
            // console.log($(this).scrollTop())
            if($(this).scrollTop()>=203){
                $('#p_fixed').addClass('p_dow');
            }else{
                $('#p_fixed').removeClass('p_dow');
            }
        });


//    无缝滚动 从 -1426 开始
        let num = 0;
        let fal = false;
        let trr = null;
        let zjc = null;
        let imgWidth = parseInt($('[data-target=list] img').width())+16;
        $('[data-target=ui_controls_direction]').on('click','a',function(e){
            e.preventDefault();
            let name = e.target.className;
            let index = 0;
            index = $('.show_a').attr('data-slide-index');
            if(fal){
                clearTimeout(trr);
            }else{
                fal = true;
                trr = setTimeout(function(){
                    $('[data-target=list]').removeClass('tran');
                    if(name == "ui_prev"){
                        num += 1;
                        if($('.show_a').parent().prev().length > 0 ){
                            $('.show_a').removeClass('show_a').parent().prev().find('a').addClass('show_a');
                        }else{
                            $('.show_a').removeClass('show_a');
                            $('[data-target=ui_pager] .ui-pager-item a').last().addClass('show_a')
                        }
                        if(num > 0 ){
                            $('[data-target=list]').animate({"left":"-475px"},450,function(){
                                $(this).css({"left":"-6261px"});
                                num = -5;
                                fal = false;
                            });
                            return;
                        }
                    }else{
                        if($('.show_a').parent().next().length > 0 ){
                            $('.show_a').removeClass('show_a').parent().next().find('a').addClass('show_a');
                        }else{
                            $('.show_a').removeClass('show_a');
                            $('[data-target=ui_pager] .ui-pager-item a').first().addClass('show_a');
                        }
                        num -= 1;
                        if(num < -5){
                            $('[data-target=list]').animate({"left":"-7228px"},450,function(){
                                $(this).css({"left":"-1426px"});
                                num = 0;
                                fal = false;
                            });
                            return;
                        }
                    }
                    $('[data-target=list]').addClass('tran').css("left",num*imgWidth-1426);
                    zjc = setInterval(function(){
                        let left = parseInt($('[data-target=list]').css('left'));
                        if(left==num*imgWidth-1426){
                            fal = false;
                            clearInterval(zjc);
                        }
                    },1);
                },10);
                // $('.show_a').removeClass('show_a');
                // console.log(num);
                // console.log(Math.abs(num));
                // Math.abs(num)+1 > 5 ? 0 : Math.abs(num)+1;
                // index = Math.abs(num)>0 ? Math.abs(num)-1  : Math.abs(num)+1 < 0 ?
                //$('[data-target=ui_pager]').find('.ui-pager-item>a').eq(Math.abs(num)).addClass('show_a');
                // $(`[data-slide-index=${index}]`).addClass('show_a');
            }
        });
//    点击点显示对应的图
        $('[data-target=ui_pager]').on('click','.ui-pager-item>a',function(e){
            e.preventDefault();
            console.log(e.target);
            let index = $(e.target).attr('data-slide-index');
            $('[data-target=list]').addClass('tran').css("left",-index*imgWidth-1426);
            num = -index;
            $('.show_a').removeClass('show_a');
            $(this).addClass('show_a');
        });

//视频
        let video1 = document.querySelector('video');
        $('.video_show').on('click','.video_play',function(){
            // video1.play();
            $(video1).show()[0].play();
            $(this).hide();
            $('.video_pause').show();
            $('.bg').hide();
            $('.mi8_index .video1 .video_con .video_show img').hide();
        })
            .on('click','.video_pause',function(){
                video1.pause();
                $(this).hide();
                $('.video_play').show()
            }).on({
            'mouseenter':function(){
                if(!video1.paused){
                    $('.video_pause>a').show()
                }
            },
            "mouseleave":function(){
                if(!video1.paused){
                    $('.video_pause>a').hide()
                }
            }
        });


        let scrollH = 0;

//    滚动添加样式
        $(window).scroll(function(){
            scrollH = $(this).scrollTop() ;
            if(scrollH >= 14200){
                $('.mi8_index .pic_r .txt h3').addClass('fudong_show');
                $('.mi8_index .pic_r .txt p').addClass('fudong_show');
            }else if(scrollH >= 13700){
                $('.mi8_index .pic_l .txt h3').addClass('fudong_show');
                $('.mi8_index .pic_l .txt p').addClass('fudong_show');
            }else if(scrollH >= 12400){
                $('.mi8_index .redwai h2').addClass('fudong_show');
                $('.mi8_index .redwai p').addClass('fudong_show');
            }else if(scrollH >= 11300){
                $('.mi8_index .cpu h2 ').addClass('fudong_show');
                $('.mi8_index .cpu p').addClass('fudong_show');
            }else if(scrollH >= 10400){
                $('.mi8_index .zhengxing2 .item h3').addClass('fudong_show');
                $('.mi8_index .zhengxing2 .item p').addClass('fudong_show');
            }else if(scrollH >= 9300){
                $('.mi8_index .zhengxing h2').addClass('fudong_show');
                $('.mi8_index .zhengxing p').addClass('fudong_show');
            }else if(scrollH >= 8200){
                $('.mi8_index .AI_cam .text h2').addClass('fudong_show');
                $('.mi8_index .AI_cam .text p').addClass('fudong_show');
            }else if(scrollH >= 7300){
                $('.mi8_index .video1 .text h2').addClass('fudong_show');
                $('.mi8_index .video1 .text p').addClass('fudong_show');
            }else if(scrollH >= 6000){
                $('.mi8_index .section4 .text h2').addClass('fudong_show');
                $('.mi8_index .section4 .text p').addClass('fudong_show');
            }else if(scrollH >= 4300){
                $('.mi8_index .section_camera h2').addClass('fudong_show');
                $('.mi8_index .section_camera p').addClass('fudong_show');
            }else if(scrollH >= 3300){
                $('.mi8_index .section_gps h2').addClass('fudong_show');
                $('.mi8_index .section_gps p').addClass('fudong_show');
            }else if(scrollH >= 2300){
                $('.mi8_index .section_pic h2.webfont').addClass('fudong_show');
                $('.mi8_index .section_pic h3.webfont5').addClass('fudong_show');
                $('.mi8_index .section_pic ul').addClass('fudong_show');
            }else if(scrollH >= 1300){
                $('.mi8_index .section1 .txt_banner1').addClass('fudong_show');
            }else if(scrollH >= 750){
                $('.mi8_index .secion_specs ul').addClass('fudong_show');
            }else if(scrollH >= 0){
                $('.mi8_index .section .txt_banner').addClass('fudong_show');
            }
        })
    }


});








