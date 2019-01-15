// SOCIAL MEDIA COLOR

$(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 500) {
        $('.social-media').css('background-color','yellow');
    } else {
        $('.social-media').css('background-color','blue');
    }
});