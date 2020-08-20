$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
    $('header').css('background','#202020');
    } else {
    $('header').css('background','transparent');
    }
})