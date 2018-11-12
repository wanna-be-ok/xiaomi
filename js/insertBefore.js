$(function(){

    $.ajax({
        url:"header.html",
        context: document.body,
        success: function(res){
            $("#header").append($(res));
            $('<link rel="stylesheet" href="./css/header.css">\n').insertAfter($('#base'));
            $('<script src="./js/header.js"><\/script>').appendTo($('head'));

        }
    });
    $.ajax({
        url:"footer.html",
        context: document.body,
        success: function(res){
            $("#footer").append($(res));
            $('<link rel="stylesheet" href="./css/footer.css">\n').insertAfter($('#base'));
            $('<script src="./js/footer.js"><\/script>').appendTo($('head'));
        }
    });

});