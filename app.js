$(document).ready(function () {
    $('i.fas.fa-arrow-down').click(function (e) { 
        e.preventDefault();
        
            $('.ji-cx-dc').removeClass('an-di');
            $('.khoi-3').addClass('full');
            $('.icon-khoi3').addClass('di-xuong');
            $('i.fas.fa-arrow-down').addClass('hide');
            $('i.fas.fa-arrow-up').removeClass('hide');
    });

    $('i.fas.fa-arrow-up').click(function (e) { 
        e.preventDefault();

            $('.ji-cx-dc-hide').addClass('an-di');
            $('.khoi-3').removeClass('full');
            $('.icon-khoi3').removeClass('di-xuong');
            $('i.fas.fa-arrow-up').addClass('hide');
            $('i.fas.fa-arrow-down').removeClass('hide');
    });
    
    $('.m1').click(function (e) { 
        e.preventDefault();

        var a = $('active')
        $('.khoi-3').addClass('full');
        $('.click-1').removeClass('hide');
        $('.click-1').addClass('active');
        $('.click-2').addClass('hide');
        $('.click-3').addClass('hide');
        $('.click-4').addClass('hide');
        $('.click-2').removeClass('active');
        $('.click-3').removeClass('active');
        $('.click-4').removeClass('active');
        $('.ji-cx-dc').removeClass('an-di');
            $('.khoi-3').addClass('full');
            $('.icon-khoi3').addClass('di-xuong');
            $('i.fas.fa-arrow-down').addClass('hide');
            $('i.fas.fa-arrow-up').removeClass('hide');
        
       

    });
    
    $('.m2').click(function (e) { 
        e.preventDefault();

        var a = $('active')
        $('.khoi-3').addClass('full');
        $('.click-2').removeClass('hide');
        $('.click-2').addClass('active');
        $('.click-1').addClass('hide');
        $('.click-3').addClass('hide');
        $('.click-4').addClass('hide');
        $('.click-1').removeClass('active');
        $('.click-3').removeClass('active');
        $('.click-4').removeClass('active');
        $('.ji-cx-dc').removeClass('an-di');
            $('.khoi-3').addClass('full');
            $('.icon-khoi3').addClass('di-xuong');
            $('i.fas.fa-arrow-down').addClass('hide');
            $('i.fas.fa-arrow-up').removeClass('hide');

    });
    
    $('.m3').click(function (e) { 
        e.preventDefault();

        var a = $('active')
        $('.click-3').removeClass('hide');
        $('.click-3').addClass('active');
        $('.click-1').addClass('hide');
        $('.click-2').addClass('hide');
        $('.click-4').addClass('hide');
        $('.click-2').removeClass('active');
        $('.click-1').removeClass('active');
        $('.click-4').removeClass('active');
        $('.khoi-3').removeClass('full');
        
        

    });
    
    $('.m4').click(function (e) { 
        e.preventDefault();

        var a = $('active')
        $('.khoi-3').addClass('full');
        $('.click-4').removeClass('hide');
        $('.click-4').addClass('active');
        $('.click-2').addClass('hide');
        $('.click-3').addClass('hide');
        $('.click-1').addClass('hide');
        $('.click-2').removeClass('active');
        $('.click-3').removeClass('active');
        $('.click-1').removeClass('active');
        $('.ji-cx-dc').removeClass('an-di');
            $('.khoi-3').addClass('full');
            $('.icon-khoi3').addClass('di-xuong');
            $('i.fas.fa-arrow-down').addClass('hide');
            $('i.fas.fa-arrow-up').removeClass('hide');

    });


    $('.a1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1000)
    });
    $('.a2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi-2').offset().top - 72
        }, 1000)
    });
    $('.a3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi-3').offset().top - 72
        }, 1000)
    });
    $('.a4').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi-6').offset().top - 72
        }, 1000)
    });
    $(window).scroll(function () { 
        if (window.pageYOffset >= 72) {
            $('nav').addClass('active-2');
        } else {
            $('nav').removeClass('active-2');
        }
    });
    $(window).scroll(function () { 
        console.log(window.pageYOffset)
        if (window.pageYOffset >= $('.khoi-6').offset().top - 72) {
            $('.de-muc').removeClass('active-3');
            $('.a4').addClass('active-3');
        } else if (window.pageYOffset >= $('.khoi-3').offset().top - 72) {
            $('.de-muc').removeClass('active-3');
            $('.a3').addClass('active-3');
        } else if (window.pageYOffset >= $('.khoi-2').offset().top - 72) {
            $('.de-muc').removeClass('active-3');
            $('.a2').addClass('active-3');
        } else {
            $('.de-muc').removeClass('active-3');
        }
    });


   
});