(function ($) {
  "use strict";

  //===== Prealoder

  if ($(".preloader").length) {
    $(".preloader").fadeOut();
  }

  jQuery(document).on("ready", function () {
    //===== Sticky

    jQuery(window).on("scroll", function (event) {
      var scroll = jQuery(window).scrollTop();
      if (scroll < 180) {
        jQuery(".header-sticky").removeClass("sticky");
      } else {
        jQuery(".header-sticky").addClass("sticky");
      }
    });

    /*---canvas menu activation---*/
    $(".canvas_open").on("click", function () {
      $(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
    });

    $(".canvas_close,.off_canvars_overlay").on("click", function () {
      $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
    });

    /*---Off Canvas Menu---*/
    var $offcanvasNav = $(".offcanvas_main_menu"),
      $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
    $offcanvasNavSubMenu
      .parent()
      .prepend(
        '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
      );

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
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
          $this.siblings("ul").slideUp("slow");
        } else {
          $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
          $this.siblings("ul").slideDown("slow");
        }
      }
      if (
        $this.is("a") ||
        $this.is("span") ||
        $this.attr("clas").match(/\b(menu-expand)\b/)
      ) {
        $this.parent().toggleClass("menu-open");
      } else if (
        $this.is("li") &&
        $this.attr("class").match(/\b('menu-item-has-children')\b/)
      ) {
        $this.toggleClass("menu-open");
      }
    });

    //=====  counter

    if ($(".counter").length) {
      $(".counter").counterUp({
        delay: 10,
        time: 3000,
      });
    }

    //===== banner animation slick slider

    function mainSlider() {
      var BasicSlider = $(".awrosoft-banner-slide");
      var BasicSlider2 = $(".awrosoft-banner-area-layout-2");
      BasicSlider.on("init", function (e, slick) {
        var $firstAnimatingElements = $(
          ".awrosoft-banner-slide-active:first-child"
        ).find("[data-animation]");
        doAnimations($firstAnimatingElements);
      });
      BasicSlider2.on("init", function (e, slick) {
        var $firstAnimatingElements = $(
          ".awrosoft-banner-slide-item:first-child"
        ).find("[data-animation]");
        doAnimations($firstAnimatingElements);
      });

      BasicSlider.on(
        "beforeChange",
        function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $(
            '.awrosoft-banner-slide-active[data-slick-index="' +
              nextSlide +
              '"]'
          ).find("[data-animation]");
          doAnimations($animatingElements);
        }
      );

      BasicSlider2.on(
        "beforeChange",
        function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $(
            '.awrosoft-banner-slide-item[data-slick-index="' + nextSlide + '"]'
          ).find("[data-animation]");
          doAnimations($animatingElements);
        }
      );

      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow:
          '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
        nextArrow:
          '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            },
          },
        ],
      });

      BasicSlider2.slick({
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow:
          '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
        nextArrow:
          '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            },
          },
        ],
      });

      function doAnimations(elements) {
        var animationEndEvents =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data("delay");
          var $animationType = "animated " + $this.data("animation");
          $this.css({
            "animation-delay": $animationDelay,
            "-webkit-animation-delay": $animationDelay,
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();

    //===== product toggle
    (function () {
      var products = document.querySelectorAll("[data-prdct]");
      var productsDescription = document.querySelectorAll(
        "[data-prdct-description]"
      );
      var scrollToDescription = document.getElementById("product-desc");
      const mediaQuery = window.matchMedia("(max-width: 992px)");
      products.forEach((product) => {
        product.addEventListener("click", () => {
          changeProduct(product);
          mediaQuery.addEventListener("load", (event) => {
            if (event.matches)
              scrollToDescription.scrollIntoView({ behavior: "smooth" });
          });
        });
      });

      function changeProduct(product) {
        products.forEach((prdct) => {
          if (
            product.getAttribute("data-toggle") ===
            prdct.getAttribute("data-toggle")
          ) {
            prdct.classList.add("active");
          } else {
            prdct.classList.remove("active");
          }
        });
        productsDescription.forEach((prdct) => {
          if (
            product.getAttribute("data-toggle") ===
            prdct.getAttribute("data-toggle")
          ) {
            prdct.classList.add("active");
          } else {
            prdct.classList.remove("active");
          }
        });
      }
    })();

    (function () {
      const categories = document.querySelectorAll(".category");
      const allProjects = document.querySelectorAll(
        "[data-filter='awro-project']"
      );

      categories.forEach((category) => {
        category.addEventListener("click", () => {
          categories.forEach((btn) => btn.classList.remove("active"));
          category.classList.add("active");
          const filter = category.id;
          allProjects.forEach((project) => {
            console.log(project.getAttribute("filter"));
            if (
              filter === "all" ||
              project.getAttribute("data-filtering").includes(filter)
            ) {
              project.style.display = "block";
            } else {
              project.style.display = "none";
            }
          });
        });
      });
    })();

    // onscroll active
    const sections = [...document.querySelectorAll("section")];
    const link = (id) => document.querySelector(`a[href="#${id}"]`);

    const inView = (element) => {
      var top = element.offsetTop;
      var height = element.offsetHeight;

      while (element.offsetParent) {
        element = element.offsetParent;
        top += element.offsetTop;
      }

      return (
        top < window.pageYOffset + window.innerHeight &&
        top + height > window.pageYOffset
      );
    };

    const init = () => {
      function update() {
        let next = false;

        sections.forEach((sections) => {
          const current = link(sections.id);

          if (inView(sections) && !next) {
            current.classList.add("current");
            next = true;
          } else {
            current.classList.remove("current");
          }
        });
      }
      update();
      window.addEventListener("scroll", update);
    };

    init();

    // Get all links with href starting with "#"
    var scrollLinks = document.querySelectorAll('a[href^="#"]');

    // Add event listeners to each link
    scrollLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // prevent default link behavior
        var sectionId = link.getAttribute("href").substr(1);
        var section = document.getElementById(sectionId);
        var sectionTop = section.offsetTop;
        var offset = 110; // change this value to adjust the offset

        window.scrollTo({
          top: sectionTop - offset,
          behavior: "smooth",
        });
      });
    });

    ///////
    //===== client slide v1 js
    $(".awrosoft-feature-slide").slick({
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },

        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            dots: false,
          },
        },

        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".awrosoft-project-slide").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            dots: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".awrosoft-project-slide-2").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      centerPadding: "350px",
      centerMode: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            centerPadding: "250px",
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            centerPadding: "250px",
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            centerPadding: "250px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            dots: false,
            centerPadding: "0px",
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".awrosoft-sponser-slide").slick({
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            dots: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            dots: false,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".awrosoft-testimonial-slide").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".project-slider-active").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".awrosoft-blog-slide-active").slick({
      arrows: false,
      prevArrow:
        '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
      nextArrow:
        '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".awrosoft-sponser-slide-3").slick({
      arrows: false,
      prevArrow:
        '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
      nextArrow:
        '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".testimonial-slider-active-4").slick({
      arrows: true,
      prevArrow:
        '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
      nextArrow:
        '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      asNavFor: ".testimonial-thumb-list",
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
          },
        },
      ],
    });
    $(".testimonial-thumb-list").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".testimonial-slider-active-4",
      dots: false,
      arrows: false,
      focusOnSelect: true,
      vertical: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".serving-slider-active").slick({
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    //===== client slide v1 js
    $(".testimonial-slide-active-5").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    //====== Header Search
    if ($(".search-box-btn").length) {
      $(".search-box-btn").on("click", function () {
        $("body").addClass("search-active");
      });
      $(".close-search").on("click", function () {
        $("body").removeClass("search-active");
      });
    }

    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 150, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }

    //====== Magnific Popup

    $(".video-popup").magnificPopup({
      type: "iframe",
      // other options
    });

    //===== Magnific Popup

    $(".image-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".second.circle")
      .circleProgress({
        value: 0.6,
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find("strong")
          .html(parseInt(80 * progress) + "<i>%</i>");
      });

    //===== Back to top

    // Scroll Event
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 300) $(".go-top").addClass("active");
      if (scrolled < 300) $(".go-top").removeClass("active");
    });

    // Click Event
    $(".go-top").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: "0",
        },
        1200
      );
    });
  });
})(jQuery);
