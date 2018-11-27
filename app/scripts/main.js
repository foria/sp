AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation
});

jQuery(function($){

    $(document).ready(function(){
        $('.nav-trigger').on('click', function() {
            $('body').toggleClass('menu-opened');
            $('.nav-menu').fadeToggle(200);
        });

        $('.div-toggler').on('click', function() {
            $(this).prev('.p-fold').toggleClass('opened');
        });

        var menuBG = $('.nav-menu li.active').find('a').data('bg');
        $('.nav-menu').css('backgroundColor', menuBG);

        $('.nav-menu li a').hover(function(){
            menuBG = $(this).data('bg');

            if(menuBG) {
                $('.nav-menu').css('backgroundColor', menuBG);
            }
        });

        var boxes, data;
        $('.un-tasks--icons li').hover(function(){
            $('.un-tasks--icons').find('.hover').removeClass('hover');
            $('.un-tasks').find('.active').removeClass('active');
            $(this).addClass('hover');
            data = $(this).data('box');
            boxes = data.split(',');
            console.log(data);

            for(var i=0; i<boxes.length; i++) {
                $('.un-tasks').find('.un-tasks--box[ data-boxnum="'+boxes[i]+'"]').addClass('active');
            }
        });

        if($('body').hasClass('home-page')) {
            window.addEventListener('scroll', function(e) {
                if ($(document).scrollTop() > 300) {
                    $('body').addClass('sticky-header');
                    $('.wheel').removeClass('animate');
                    $('#cd-vertical-nav').addClass('show-nav');
                } else {
                    $('body').removeClass('sticky-header');
                    $('.wheel').addClass('animate');
                    $('#cd-vertical-nav').removeClass('show-nav');
                }
            });
        } else {
            $('#cd-vertical-nav').addClass('show-nav');
        }

        $('.wheel--slicies svg > a').hover(function(){
            console.log('yo');
            $('.wheel--slicies svg').find('.hover').removeClass('hover');
            $(this).addClass('hover');
            $('.wheel').addClass('hover');
        })

        $('.wheel').mouseleave(function(){
            $('.wheel').removeClass('hover');
            $('.wheel--slicies svg > a').find('.hover').removeClass('hover');
        })

        // Scroll Navigation
        var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

        updateNavigation();
        $(window).on('scroll', function(){
            updateNavigation();
        });

        //smooth scroll to the section
        navigationItems.on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });
        //smooth scroll to second section
        $('.cd-scroll-down').on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });

        function updateNavigation() {
            contentSections.each(function(){
                $this = $(this);
                var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
                if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                    navigationItems.eq(activeSection).addClass('is-selected');
                }else {
                    navigationItems.eq(activeSection).removeClass('is-selected');
                }
            });
        }

        function smoothScroll(target) {
            $('body,html').animate(
                {'scrollTop':(target.offset().top-300)},
                600
            );
        }

    });

    if($('.trattore').length > 0){
        var elementTop, elementBottom, viewportTop, viewportBottom, diffTop, proportion;

        $(window).on('resize scroll', function() {
            elementTop = $('.trattore').offset().top;
            elementBottom = elementTop + $('.trattore').outerHeight();
            viewportTop = $(window).scrollTop();
            viewportBottom = viewportTop + $(window).height();
            diffTop = viewportBottom - elementTop;
            proportion = ( (diffTop / $(window).height())*100 ) -20;
            console.log(elementTop + ' ' + viewportBottom + ' ' + viewportTop + ' ' + diffTop);

            if( proportion > 0 && proportion < 40 ){
                $('.trattore').css('left', proportion+'%' );
            }
        });
    }

    if($('.hfarm').length > 0){
        var elementTop, elementBottom, viewportTop, viewportBottom, diffTop, proportion;

        $(window).on('resize scroll', function() {
            elementTop = $('.hfarm-trattore').offset().top;
            elementBottom = elementTop + $('.hfarm-trattore').outerHeight();
            viewportTop = $(window).scrollTop();
            viewportBottom = viewportTop + $(window).height();
            diffTop = viewportBottom - elementTop;
            proportion = ( (diffTop / $(window).height())*100 ) -20;
            console.log(elementTop + ' ' + viewportBottom + ' ' + viewportTop + ' ' + diffTop);

            if( proportion > 0 && proportion < 75 ){
                $('.hfarm-trattore').css('left', proportion+'%' );
            }
        });
    }

    if($('#bolliblu').length > 0){
        var elementTop, elementBottom, viewportTop, viewportBottom, diffTop, proportion;

        $(window).on('resize scroll', function() {
            elementTop = $('#bolliblu').offset().top;
            elementBottom = elementTop + $('.hfarm-trattore').outerHeight();
            viewportTop = $(window).scrollTop();
            viewportBottom = viewportTop + $(window).height();
            diffTop = viewportBottom - elementTop;
            proportion = (diffTop / $(window).height())*300 ;
            console.log(elementTop + ' ' + viewportBottom + ' ' + viewportTop + ' ' + diffTop);

            if( proportion > 0 && proportion < 400 ){
                $('.rotaia').css('transform', 'rotate('+ proportion +'deg)' );
            }
        });
    }

})
