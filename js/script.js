$(document).ready(function () {

    $(document).on('click', '.user, .already-account', function () {
        $('.form').addClass('login-active').removeClass('sign-up-active')
    })

    $(document).on('click', '.sign-up-btn', function () {
        $('.form').addClass('sign-up-active').removeClass('login-active')
    })

    $(document).on('click', '.form-cancel', function () {
        $('.form').removeClass('login-active').removeClass('sign-up-active')
    })

    // Slide

    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });

    // Slide de categorias

    $('#autoWidth').lightSlider({
        auto:true,
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  

    $(window).scroll(function(){
        if($(document).scrollTop() > 50) {
            $('.navigation').addClass('fix-nav')
        } else {
            $('.navigation').removeClass('fix-nav')

        }
    });

    $('.toggle').click(function() {
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })



});
