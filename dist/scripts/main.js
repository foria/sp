"use strict";function numberWithCommas(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function incrementNumber(t,e,i){var n=t.html(),o=n.split("."),s=parseInt(o[0]+o[1])+177*e;s>i&&(s=i),t.html(numberWithCommas(s))}AOS.init({offset:120,delay:300,duration:400,anchorPlacement:"top-top"}),$.fn.isInViewport=function(){var t=$(this).offset().top,e=t+$(this).outerHeight(),i=$(window).scrollTop(),n=i+$(window).height();return e>i&&t<n},jQuery(function(t){function e(){t("#ruota1 .showed").last().next().addClass("showed")}if(t(document).ready(function(){function e(){a.each(function(){var e=t('#cd-vertical-nav a[href="#'+t(this).attr("id")+'"]').data("number")-1;t(this).offset().top-t(window).height()/2<t(window).scrollTop()&&t(this).offset().top+t(this).height()-t(window).height()/2>t(window).scrollTop()?r.eq(e).addClass("is-selected"):r.eq(e).removeClass("is-selected")})}function i(e){t("body,html").animate({scrollTop:e.offset().top-300},600)}t(".nav-trigger").on("click",function(){t("body").toggleClass("menu-opened"),t(".nav-menu").fadeToggle(200)});var n=t(".nav-menu li.active").find("a").data("bg");t(".nav-menu").css("backgroundColor",n),t(".nav-menu li a").hover(function(){(n=t(this).data("bg"))&&t(".nav-menu").css("backgroundColor",n)});var o,s;t(".un-tasks--icons li").hover(function(){t(".un-tasks--icons").find(".hover").removeClass("hover"),t(".un-tasks").find(".active").removeClass("active"),t(this).addClass("hover"),s=t(this).data("box"),o=s.split(",");for(var e=0;e<o.length;e++)t(".un-tasks").find('.un-tasks--box[ data-boxnum="'+o[e]+'"]').addClass("active")}),t("body").hasClass("home-page")?(t(".wheel").addClass("animate"),t(".wheel").mouseleave(function(){t(".wheel").removeClass("hover"),t(".wheel--slicies svg > a").find(".hover").removeClass("hover")}),"ontouchstart"in document.documentElement?t(".wheel--slicies svg > a").click(function(){var e=t(this).attr("href");window.location.href=e}):t(".wheel--slicies svg > a").hover(function(){t(".wheel--slicies svg").find(".hover").removeClass("hover"),t(this).addClass("hover"),t(".wheel").addClass("hover"),t(".wheel").removeClass("animate"),t(".wheel").addClass("post-animate")})):t("#cd-vertical-nav").addClass("show-nav");var a=t(".section"),r=t("#cd-vertical-nav a");if(e(),t(window).on("scroll",function(){e()}),r.on("click",function(e){e.preventDefault(),i(t(this.hash))}),t(".community-list").length>0){var c,l;"ontouchstart"in document.documentElement?(t(".community-list li").on("touchstart",function(){t(".community-cities").find(".active").removeClass("active"),c="."+t(this).data("city"),t(".community-cities").find(c).addClass("active")}),t(".community-cities img").on("touchstart",function(){t(".community-list").find(".active").removeClass("active"),l=t(this).attr("class"),t(".community-list").find('li[data-city="'+l+'"]').addClass("active")}),t(".community-cities img").on("touchend",function(){t(".community-list").find(".active").removeClass("active")})):(t(".community-list li").hover(function(){t(".community-cities").find(".active").removeClass("active"),c="."+t(this).data("city"),t(".community-cities").find(c).addClass("active")}),t(".community-cities img").hover(function(){l=t(this).attr("class"),t(".community-list").find('li[data-city="'+l+'"]').addClass("active")},function(){t(".community-list").find(".active").removeClass("active")}))}}),t("#share-revenues").length>0&&t(window).on("resize scroll",function(){if(t("#numero3").isInViewport()){setInterval(function(){incrementNumber(t("#numero3"),9,911312),incrementNumber(t("#numero4"),9,919295)},.1)}if(t("#numero1").isInViewport()){setInterval(function(){incrementNumber(t("#numero1"),9,902008),incrementNumber(t("#numero2"),9,885959)},.1)}if(t("#numero5").isInViewport()){setInterval(function(){incrementNumber(t("#numero5"),1,25353),incrementNumber(t("#numero6"),1,17287)},.1)}}),setInterval(function(){e()},1),t(".trattore").length>0){var i,n,o,s,a,r;t(window).on("resize scroll",function(){i=t(".trattore").offset().top,n=i+t(".trattore").outerHeight(),o=t(window).scrollTop(),s=o+t(window).height(),a=s-i,(r=a/t(window).height()*100-20)>0&&r<40&&t(".trattore").css("left",r+"%")})}if(t(".hfarm").length>0){var i,n,o,s,a,r;t(window).on("resize scroll",function(){i=t(".hfarm-trattore").offset().top,n=i+t(".hfarm-trattore").outerHeight(),o=t(window).scrollTop(),s=o+t(window).height(),a=s-i,(r=a/t(window).height()*100-20)>0&&r<75&&t(".hfarm-trattore").css("left",r+"%")})}if(t("#bolliblu").length>0){var i,n,o,s,a,r;t(window).on("resize scroll",function(){i=t("#bolliblu").offset().top,n=i+t(".hfarm-trattore").outerHeight(),o=t(window).scrollTop(),s=o+t(window).height(),a=s-i,(r=a/t(window).height()*300)>0&&r<400&&t(".rotaia").css("transform","rotate("+r+"deg)")})}if(t("#video-train").length>0&&window.innerWidth>767){t(function(){var e;t(window).scroll(function(){clearTimeout(e),e=setTimeout(function(){t(window).trigger("scrollStop")},100)})});var i,n,o,s,a,r,c,l=document.getElementById("video-train");l.addEventListener("loadedmetadata",function(){c=l.duration}),t(window).on("resize scroll",function(){i=t("#trainonscroll").offset().top,n=i+t("#trainonscroll").outerHeight(),o=t(window).scrollTop(),s=o+t(window).height(),a=s-i,(r=a/t(window).height()*100)>0&&r<100&&l.play()}),t(window).bind("scrollStop",function(){l.pause()})}});