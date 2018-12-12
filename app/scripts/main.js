
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation
});

// Check if element is in the viewport.
$.fn.isInViewport = function(offset) {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop() + offset;
    var viewportBottom = viewportTop + $(window).height() - offset;
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function incrementNumber($el, speed, limit){
    var string = $el.html();
    var stringNum = string.split('.');
    var current = parseInt( stringNum[0] + stringNum[1] ) + (177 * speed);
    if(current > limit){
        current = limit;
    }
    $el.html(numberWithCommas(current));
}


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
        // $('.div-toggler').on('click', function() {
        //     $('#wheel-model').toggleClass('opened');
        // });

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

            $('.wheel').mouseleave(function(){
                $('.wheel').removeClass('hover');
                $('.wheel--slicies svg > a').find('.hover').removeClass('hover');
            })

            // toggle sticky header on HP
            // window.addEventListener('scroll', function(e) {
            //     if ($(document).scrollTop() > 300) {
            //         $('body').addClass('sticky-header');
            //         $('.wheel').removeClass('post-animate');
            //         $('#cd-vertical-nav').addClass('show-nav');
            //     } else {
            //         $('body').removeClass('sticky-header');
            //         $('.wheel').addClass('animate');
            //         $('#cd-vertical-nav').removeClass('show-nav');
            //     }
            // });

            // hover and click effect on wheel
            if ('ontouchstart' in document.documentElement){
                $('.wheel--slicies svg > a').click(function(){
                    var linkURL = $(this).attr('href');
                    window.location.href = linkURL;
                })
            } else {
                // hover effect on wheel
                $('.wheel--slicies svg > a').hover(function(){
                    $('.wheel--slicies svg').find('.hover').removeClass('hover');
                    $(this).addClass('hover');
                    $('.wheel').addClass('hover');
                    $('.wheel').removeClass('animate');
                    $('.wheel').addClass('post-animate');
                })
            }

        }
        // else {
        //     $('#cd-vertical-nav').addClass('show-nav');
        // }

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

        if( $('.community-list').length > 0 ){
            // hover and click effect on community table
            var cityClass, cityData;
            if ('ontouchstart' in document.documentElement){
                $('.community-list li').on( 'touchstart', function(){
                    $('.community-cities').find('.active').removeClass('active');
                    cityClass = '.' + $(this).data('city');
                    $('.community-cities').find(cityClass).addClass('active');
                })

                $('.community-cities img').on( 'touchstart', function(){
                    $('.community-list').find('.active').removeClass('active');
                    cityData = $(this).attr('class');
                    $('.community-list').find('li[data-city="'+cityData+'"]').addClass('active');
                })

                $('.community-cities img').on( 'touchend', function(){
                    $('.community-list').find('.active').removeClass('active');
                })
            } else {
                $('.community-list li').hover(function(){
                    $('.community-cities').find('.active').removeClass('active');
                    cityClass = '.' + $(this).data('city');
                    $('.community-cities').find(cityClass).addClass('active');
                })

                $('.community-cities img').hover(function(){
                    cityData = $(this).attr('class');
                    $('.community-list').find('li[data-city="'+cityData+'"]').addClass('active');
                }, function(){
                    $('.community-list').find('.active').removeClass('active');
                })
            }
        }

    });

    if($('#share-revenues').length > 0){
        $(window).on('resize scroll', function(){
            if ($('#numero3').isInViewport(0)) {
                 var numero3 = setInterval(function() {
                    incrementNumber($('#numero3'), 9, 911312);
                    incrementNumber($('#numero4'), 9, 919295);
                }, 0.1);
            }
            if ($('#numero1').isInViewport(0)) {
                 var numero1 = setInterval(function() {
                    incrementNumber($('#numero1'), 9, 902008);
                    incrementNumber($('#numero2'), 9, 885959);
                }, 0.1);
            }
            if ($('#numero5').isInViewport(0)) {
                 var numero5 = setInterval(function() {
                    incrementNumber($('#numero5'), 1, 25353);
                    incrementNumber($('#numero6'), 1, 17287);
                }, 0.1);
            }
            if ($('#cerchio1').isInViewport(650)) {
                function dottetCircleAnimation(){
                    $('#cerchio1 .showed').first().prev().addClass('showed');
                    $('#cerchio2 .showed').first().prev().addClass('showed');
                }
                setInterval(function() {
                    dottetCircleAnimation();
                }, 30);
            }
        });
    }

    if($('.trattore').length > 0){
        var elementTop, elementBottom, viewportTop, viewportBottom, diffTop, proportion;

        $(window).on('resize scroll', function() {
            elementTop = $('.trattore').offset().top;
            elementBottom = elementTop + $('.trattore').outerHeight();
            viewportTop = $(window).scrollTop();
            viewportBottom = viewportTop + $(window).height();
            diffTop = viewportBottom - elementTop;
            proportion = ( (diffTop / $(window).height())*100 ) -20;
            //console.log(elementTop + ' ' + viewportBottom + ' ' + viewportTop + ' ' + diffTop);

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
            //console.log(elementTop + ' ' + viewportBottom + ' ' + viewportTop + ' ' + diffTop);

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

    if($('#video-train').length > 0 && window.innerWidth > 767){
        $(function() {
          var timer;
          $(window).scroll(function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
              $(window).trigger('scrollStop');
            }, 100);
          });
        });

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
