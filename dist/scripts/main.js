"use strict";AOS.init({offset:120,delay:300,duration:400,anchorPlacement:"top-top"}),$(function(){var e;$(window).scroll(function(){clearTimeout(e),e=setTimeout(function(){$(window).trigger("scrollStop")},100)})}),jQuery(function(e){if(e(document).ready(function(){function o(){s.each(function(){var o=e('#cd-vertical-nav a[href="#'+e(this).attr("id")+'"]').data("number")-1;e(this).offset().top-e(window).height()/2<e(window).scrollTop()&&e(this).offset().top+e(this).height()-e(window).height()/2>e(window).scrollTop()?l.eq(o).addClass("is-selected"):l.eq(o).removeClass("is-selected")})}function t(o){e("body,html").animate({scrollTop:o.offset().top-300},600)}e(".nav-trigger").on("click",function(){e("body").toggleClass("menu-opened"),e(".nav-menu").fadeToggle(200)});var i=e(".nav-menu li.active").find("a").data("bg");e(".nav-menu").css("backgroundColor",i),e(".nav-menu li a").hover(function(){(i=e(this).data("bg"))&&e(".nav-menu").css("backgroundColor",i)}),e(".div-toggler").on("click",function(){e("#wheel-model").toggleClass("opened")});var n,a;e(".un-tasks--icons li").hover(function(){e(".un-tasks--icons").find(".hover").removeClass("hover"),e(".un-tasks").find(".active").removeClass("active"),e(this).addClass("hover"),a=e(this).data("box"),n=a.split(",");for(var o=0;o<n.length;o++)e(".un-tasks").find('.un-tasks--box[ data-boxnum="'+n[o]+'"]').addClass("active")}),e("body").hasClass("home-page")?(e(".wheel").addClass("animate"),e(".wheel").mouseleave(function(){e(".wheel").removeClass("hover"),e(".wheel--slicies svg > a").find(".hover").removeClass("hover")}),window.addEventListener("scroll",function(o){e(document).scrollTop()>300?(e("body").addClass("sticky-header"),e(".wheel").removeClass("post-animate"),e("#cd-vertical-nav").addClass("show-nav")):(e("body").removeClass("sticky-header"),e(".wheel").addClass("animate"),e("#cd-vertical-nav").removeClass("show-nav"))}),"ontouchstart"in document.documentElement?e(".wheel--slicies svg > a").click(function(){var o=e(this).attr("href");window.location.href=o}):e(".wheel--slicies svg > a").hover(function(){e(".wheel--slicies svg").find(".hover").removeClass("hover"),e(this).addClass("hover"),e(".wheel").addClass("hover"),e(".wheel").removeClass("animate"),e(".wheel").addClass("post-animate")})):e("#cd-vertical-nav").addClass("show-nav");var s=e(".section"),l=e("#cd-vertical-nav a");o(),e(window).on("scroll",function(){o()}),l.on("click",function(o){o.preventDefault(),t(e(this.hash))});var r;e(".community-list").length>0&&e(".community-list li").hover(function(){e(".community-cities").find(".active").removeClass("active"),r="."+e(this).data("city"),e(".community-cities").find(r).addClass("active")})}),e(".trattore").length>0){var o,t,i,n,a,s;e(window).on("resize scroll",function(){o=e(".trattore").offset().top,t=o+e(".trattore").outerHeight(),i=e(window).scrollTop(),n=i+e(window).height(),a=n-o,(s=a/e(window).height()*100-20)>0&&s<40&&e(".trattore").css("left",s+"%")})}if(e(".hfarm").length>0){var o,t,i,n,a,s;e(window).on("resize scroll",function(){o=e(".hfarm-trattore").offset().top,t=o+e(".hfarm-trattore").outerHeight(),i=e(window).scrollTop(),n=i+e(window).height(),a=n-o,(s=a/e(window).height()*100-20)>0&&s<75&&e(".hfarm-trattore").css("left",s+"%")})}if(e("#bolliblu").length>0){var o,t,i,n,a,s;e(window).on("resize scroll",function(){o=e("#bolliblu").offset().top,t=o+e(".hfarm-trattore").outerHeight(),i=e(window).scrollTop(),n=i+e(window).height(),a=n-o,(s=a/e(window).height()*300)>0&&s<400&&e(".rotaia").css("transform","rotate("+s+"deg)")})}if(e("#video-train").length>0&&window.innerWidth>767){var o,t,i,n,a,s,l,r=document.getElementById("video-train");r.addEventListener("loadedmetadata",function(){l=r.duration}),e(window).on("resize scroll",function(){o=e("#trainonscroll").offset().top,t=o+e("#trainonscroll").outerHeight(),i=e(window).scrollTop(),n=i+e(window).height(),a=n-o,(s=a/e(window).height()*100)>0&&s<100&&r.play()}),e(window).bind("scrollStop",function(){r.pause()})}});