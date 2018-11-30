AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation
});

$(function() {
  var timer;
  $(window).scroll(function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      $(window).trigger('scrollStop');
    }, 100);
  });
});

jQuery(function($){

    $(document).ready(function(){

        // menu trigger
        $('.nav-trigger').on('click', function() {
            $('body').toggleClass('menu-opened');
            $('.nav-menu').fadeToggle(200);
        });

        // offcanvas menu change color
        var menuBG = $('.nav-menu li.active').find('a').data('bg');
        $('.nav-menu').css('backgroundColor', menuBG);

        $('.nav-menu li a').hover(function(){
            menuBG = $(this).data('bg');

            if(menuBG) {
                $('.nav-menu').css('backgroundColor', menuBG);
            }
        });

        // mwheel-model trigger
        $('.div-toggler').on('click', function() {
            $('#wheel-model').toggleClass('opened');
        });

        // UN boxes
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

        // wheel & toggle sticky header on HP
        if($('body').hasClass('home-page')) {

            // wheel animations
            $('.wheel').addClass('animate');

            // hover effect on wheel
            $('.wheel--slicies svg > a').hover(function(){
                $('.wheel--slicies svg').find('.hover').removeClass('hover');
                $(this).addClass('hover');
                $('.wheel').addClass('hover');
                $('.wheel').removeClass('animate');
                $('.wheel').addClass('post-animate');
            })

            $('.wheel').mouseleave(function(){
                $('.wheel').removeClass('hover');
                $('.wheel--slicies svg > a').find('.hover').removeClass('hover');
            })

            window.addEventListener('scroll', function(e) {
                if ($(document).scrollTop() > 300) {
                    $('body').addClass('sticky-header');
                    $('.wheel').removeClass('post-animate');
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

        // Scroll Navigation
        var $contentSections = $('.section'),
        navigationItems = $('#cd-vertical-nav a');

        function updateNavigation() {
            $contentSections.each(function(){
                var activeSection = $('#cd-vertical-nav a[href="#'+$(this).attr('id')+'"]').data('number') - 1;
                if ( ( $(this).offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop() ) ) {
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

        updateNavigation();
        $(window).on('scroll', function(){
            updateNavigation();
        });

        //smooth scroll to the section
        navigationItems.on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });

        // community table
        var cityClass;
        if( $('.community-list').length > 0 ){
            $('.community-list li').hover(function(){
                $('.community-cities').find('.active').removeClass('active');
                cityClass = '.' + $(this).data('city');
                $('.community-cities').find(cityClass).addClass('active');
            })
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
            //console.log(elementTop + ' ' + viewportBottom + ' ' + viewportTop + ' ' + diffTop);

            if( proportion > 0 && proportion < 400 ){
                $('.rotaia').css('transform', 'rotate('+ proportion +'deg)' );
            }
        });
    }

    if($('#video-train').length > 0){
        var elementTop, elementBottom, viewportTop, viewportBottom, diffTop, proportion, proportionIndex, totalFrames;

        // video play on scroll
        var frameNumber = 0, // start video at frame 0
        // lower numbers = faster playback
        playbackConst = 500,
        // select video element
        vid = document.getElementById('video-train');
        // var vid = $('#v0')[0]; // jquery option

        // dynamically set the page height according to video length
        vid.addEventListener('loadedmetadata', function() {
            totalFrames = vid.duration;
          //setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
        });


        // function scrollPlay(){
        //     elementTop = $('#video-train').offset().top;
        //     elementBottom = elementTop + $('#video-train').outerHeight();
        //     viewportTop = $(window).scrollTop();
        //     viewportBottom = viewportTop + $(window).height();
        //     diffTop = viewportBottom - elementTop;
        //     proportion = (diffTop / $(window).height())*100;

        //     frameNumber  = (proportion * totalFrames)/100;
        //     vid.currentTime  = 15;
        //     window.requestAnimationFrame(scrollPlay);
        // }

        //window.requestAnimationFrame(scrollPlay);
        //proportionIndex = 0;
        $(window).on('resize scroll', function() {
            elementTop = $('#trainonscroll').offset().top;
            elementBottom = elementTop + $('#trainonscroll').outerHeight();
            viewportTop = $(window).scrollTop();
            viewportBottom = viewportTop + $(window).height();
            diffTop = viewportBottom - elementTop;
            proportion = (diffTop / $(window).height())*100;
            //console.log(proportion);

            //frameNumber  = (proportion * totalFrames)/100;
            //console.log(frameNumber);

            if( proportion > 0 && proportion < 100 ){
                //if(proportion > proportionIndex) {
                    vid.play();
                //} else {
                //     vid.playBackwards();
                // }
                // proportionIndex = proportion;
            }
        });

        $(window).bind('scrollStop', function() {
            vid.pause();
        });
    }

})
