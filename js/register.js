$(function(){
    let upwd = '';
    let phone = '';
    let email = '';
    $('input:not([type=submit])').on('blur',function(){
        if($(this).attr('type') === 'tel'){
            if(!(/^1[34578]\d{9}$/).test($(this).val())){
                $(this).parents('label').addClass('err').end().parents('.list').next('span').addClass('err');
            }
            phone = $(this).val();
        }else if($(this).attr('type') === 'password'){
            if($(this).hasClass('queren')){
                if($('input[type=password]').eq(0).val() !== $('input[type=password]').eq(1).val()){
                    $(this).parents('label').addClass('err').end().parents('.list').next('span').addClass('err');
                }
                return;
            }
            if(!/^[0-9a-zA-Z]{6,14}$/.test($(this).val())){
                $(this).parents('label').addClass('err').end().parents('.list').next('span').addClass('err');
            }
            upwd = $(this).val();
        }else if($(this).attr('type') === 'text'){
            if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test($(this).val())){
                $(this).parents('label').addClass('err').end().parents('.list').next('span').addClass('err');
            }
            email = $(this).val();
        }
    }).on('keyup',function(){
        $(this).parents('label').removeClass('err').end().parents('.list').next('span').removeClass('err');
    });
    $('.btn').on('click','input',function(e){
        e.preventDefault();
        if($('.err').length < 1 && phone !== '' && upwd !== '' && email !== '' ){
            console.log(1);
            console.log(phone,upwd,email);
            $.ajax({
                url:'/reg/zhuce',
                type:'post',
                data:{
                    phone:phone,
                    upwd:upwd,
                    email:email
                },
                success:function(res){
                    console.log(res);
                    if(res.msg){
                        location.href=res.msg;
                    }
                    if(res === true){
                        location.href='/'
                    }
                }
            });
        }
    })

});