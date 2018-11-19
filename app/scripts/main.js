jQuery(function($){

    $(document).ready(function(){
        $('body').on('click', '.nav-trigger', function() {
            $('body').toggleClass('menu-opened');
            $('.nav-menu').fadeToggle(200);
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
