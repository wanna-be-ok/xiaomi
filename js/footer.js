$(function(){
    $('footer .footer .container .list .col-contact a ').hover(function(){
        $('footer .footer .container .list .col-contact').toggleClass('change_kf')
    });
    $('footer .footer .container .service li').hover(function(){
        // $('footer .footer .container .service').toggleClass('change_orange')
        $(this).find('a').toggleClass('change_color').find('i').toggleClass('change_orange');
    });
    $('footer .footer .container .site-info .container-logo .text p a').hover(function(){
        $(this).toggleClass('change_fcolor');
    })
});