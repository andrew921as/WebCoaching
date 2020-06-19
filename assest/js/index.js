$(document).ready(function () {
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop > 30){
            $(".main-nav").addClass("navbar-color");
        } else {
            $(".main-nav").removeClass("navbar-color");
        }
    });
});