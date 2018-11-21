jQuery(function($){

    $(document).ready(function(){
        $('.nav-trigger').on('click', function() {
            $('body').toggleClass('menu-opened');
            $('.nav-menu').fadeToggle(200);
        });

        var menuBG;
        $('.nav-menu li a').hover(function(){
            menuBG = $(this).data('bg');
            console.log(menuBG);

            if(menuBG) {
                $('.nav-menu').css('backgroundColor', menuBG);
            }
        });

        // $(document).scroll(function (e) {
        //   $.each($('section'), function (index, section) {
        //     if($(this).scrollTop() >= section.getBoundingClientRect().top && $(this).scrollTop() <= section.getBoundingClientRect().bottom){
        //       if ($(section).hasClass('bgwhite')) {
        //         $('.js_navbar').removeClass('nav-trigger');
        //         $('.js_navbar').addClass('nav-trigger-dark');
        //       } else {
        //         $('.js_navbar').removeClass('nav-trigger-dark');
        //         $('.js_navbar').addClass('nav-trigger');
        //       }
        //     }
        //   });
        // });
    })

})
