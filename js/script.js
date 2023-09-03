jQuery( document ).ready(function( $ ) {

	"use strict";

        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        $(window).scroll(function() {
  
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height() | $('.page-banner').header;
          var header = $('header').height();
          if ( this.oldScroll > this.scrollY && scroll >= box - header) {
            $("header:not(.noHeader)").addClass("background-header");
          } 
          else {
            $("header:not(.noHeader)").removeClass("background-header");
          }
          this.oldScroll = this.scrollY;
        }); 

        //Scroll to Top...
        function scrollToTop() {
          var $scrollUp = $('#scroll-top'),
              $lastScrollTop = 0,
              $window = $(window);
  
          $window.on('scroll', function () {
              var st = $(this).scrollTop();
              if (st > $lastScrollTop) {
                  $scrollUp.removeClass('show');
              } else {
                  if ($window.scrollTop() > 200) {
                      $scrollUp.addClass('show');
                  } else {
                      $scrollUp.removeClass('show');
                  }
              }
              $lastScrollTop = st;
          });
  
          $scrollUp.on('click', function (evt) {
              $('html, body').animate({scrollTop: 0}, 600);
              evt.preventDefault();
          });
      }
    scrollToTop();
    
    // Mobile menubar...
    $("#mobile-menu-trigger").on("click", function () {
      $("#mobile-menu-overlay").addClass("active");
      $("body").addClass("no-overflow");
    });
  
    $("#mobile-menu-close-trigger").on("click", function () {
      $("#mobile-menu-overlay").removeClass("active");
      $("body").removeClass("no-overflow");
    });
    var $offCanvasNav = $(".offcanvas-navigation"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });
        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:5000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
            fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

    //Header dropdown trigger...
    $('.dropdown').hover(function(){ 
        $('.dropdown-toggle', this).trigger('click'); 
    });
    // AOS ANIMATION ON SCROLL
    AOS.init({
        disable: function() {
          var maxWidth = 1201;
          return window.innerWidth < maxWidth;
        },
        easing: "ease",
        once: true, // whether animation should happen only once - while scrolling down
    });

    //Scrollspy animation scroll..
    $("#service-list a").on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top
        }, 300, function(){
        });
   });

    //Service header animation scroll..
    $("#serviceMenu .dropdown-menu a, #footerServiceLink li a").on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top
        }, 300, function(){
        });
   });
   
   //Service mobile header animation scroll..
   $(".serviceSection ul.sub-menu-service li a.dropdown-item").on('click', function(e) {
     $("#mobile-menu-overlay").removeClass("active");
     $("body").removeClass("no-overflow");
     e.preventDefault();
     $('html, body').animate({
         scrollTop: $(this.hash).offset().top
       }, 300, function(){
       });
  });

    //contact page map scroll...
    $("#contact-item a").on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top
        }, 300, function(){
        });
   });
   
   //Gas content scroll/Gas header animation scroll...
   $("#gasMenu .dropdown-menu a, #gas-list a").on('click', function(e) { 
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 90
        }, 300, function(){
        });
  });
   //Callback validation...
    $("#callback-submit").click(function(e) { 
      e.preventDefault();
      var name = $("#callback-name").val();
      var email = $("#callback-email").val();
      var phone = $("#callback-phone-number").val();
      var subject = $("#callback-subject").val();
      var message = $("#callback-message").val();
      // $("#returnmessage").empty(); // To empty previous error/success message.
      // Checking for blank fields.

      if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
        alert("Please Fill Required Fields");
      } else {
        $("#callback-name").val('');
        $("#callback-email").val('');
        $("#callback-phone-number").val('');
        $("#callback-subject").val('');
        $("#callback-message").val('');
        alert("Thanks for the interest. Kindly Reach Us on provided contact number");
      }
    });

    // Modal video play/pause...
    // let videoURL = $('#modalvideo iframe').attr('src');
    // $('#modalvideo').on('show.bs.modal', function (e) {
    //   $('#modalvideo iframe').attr('src', videoURL);
    // });
    // $('#modalvideo').on('hidden.bs.modal', function () {
    //   $('#modalvideo iframe').attr('src', '');
    // });
});
