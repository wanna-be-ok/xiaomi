$(function(){
    $('.wrap .denglu_box .denglu .biaodan .biao .login_xin_uname form .btn_bg .btn').on('click',function(e){
        e.preventDefault();
        $.ajax({
            url:'/reg/denglu',
            type:'post',
            data:{
                phone:$('[type=text]').val(),
                upwd:$('[type=password]').val(),
            },
            success:function(res){
                console.log(res);
                if(res.code === 1){
                    location.href=res.msg;
                }else{
                    $('.wrap .denglu_box .denglu .biaodan .biao .login_xin_uname form .login_box .input label:nth-child(1)').addClass('err');
                    $('.warning').removeClass('warning');
                }

            }
        });
    });
    $('input:not([type=submit])').on('keyup',function(){
       $('.err').removeClass('err');
       $('.wrap .denglu_box .denglu .biaodan .biao .login_xin_uname form .login_box .input>div').addClass('warning');
    });

});