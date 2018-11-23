AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

jQuery(function($){

    $(document).ready(function(){
        $('.nav-trigger').on('click', function() {
            $('body').toggleClass('menu-opened');
            $('.nav-menu').fadeToggle(200);
        });

        var menuBG;
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

        if(window.innerWidth > 1024) {
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
        }

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

        //open-close navigation on touch devices
        $('.touch .cd-nav-trigger').on('click', function(){
            $('.touch #cd-vertical-nav').toggleClass('open');

        });
        //close navigation on touch devices when selectin an elemnt from the list
        $('.touch #cd-vertical-nav a').on('click', function(){
            $('.touch #cd-vertical-nav').removeClass('open');
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

    })

})
