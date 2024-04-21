!(function (e) {
  "use strict";
  var t;
  if (
    (e(window).on("load", function () {
      e(".preloader").fadeOut();
    }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.thmobilemenu = function (t) {
      var a = e.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "menu-item-has-children",
          thSubMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          appendElement: '<span class="th-mean-expand"></span>',
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function n() {
          t.toggleClass(a.bodyToggleClass);
          var n = "." + a.subMenuClass;
          e(n).each(function () {
            e(this).hasClass(a.subMenuToggleClass) &&
              (e(this).removeClass(a.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(a.subMenuParentToggle));
          });
        }
        t.find("." + a.subMenuParent).each(function () {
          var t = e(this).find("ul");
          t.addClass(a.subMenuClass),
            t.css("display", "none"),
            e(this).addClass(a.subMenuParent),
            e(this).addClass(a.thSubMenuParent),
            e(this).children("a").append(a.appendElement);
        });
        var i = "." + a.thSubMenuParent + " > a";
        e(i).each(function () {
          e(this).on("click", function (t) {
            var n, i;
            t.preventDefault(),
              (n = e(this).parent()),
              (i = n.children("ul")).length > 0 &&
                (n.toggleClass(a.subMenuParentToggle),
                i.slideToggle(a.toggleSpeed),
                i.toggleClass(a.subMenuToggleClass));
          });
        }),
          e(a.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              n();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), n();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".th-menu-wrapper").thmobilemenu(),
    e((t = ".onepage-nav")).length > 0 &&
      e(t).each(function () {
        var t = e(this).find("a");
        e(this)
          .find(t)
          .each(function () {
            e(this).on("click", function () {
              var t = e(this.getAttribute("href"));
              t.length &&
                (event.preventDefault(),
                e("html, body")
                  .stop()
                  .animate({ scrollTop: t.offset().top - 10 }, 1e3));
            });
          });
      }),
    e(window).on("scroll", function () {
      e(".onepage-nav").length;
    }),
    e(window).scroll(function () {
      e(this).scrollTop() > 500
        ? (e(".sticky-wrapper").addClass("sticky"),
          e(".category-menu").addClass("close-category"))
        : (e(".sticky-wrapper").removeClass("sticky"),
          e(".category-menu").removeClass("close-category"));
    }),
    e(".menu-expand").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(), e(".category-menu").toggleClass("open-category");
      });
    }),
    e(".scroll-top").length > 0)
  ) {
    var a = document.querySelector(".scroll-top"),
      n = document.querySelector(".scroll-top path"),
      i = n.getTotalLength();
    (n.style.transition = n.style.WebkitTransition = "none"),
      (n.style.strokeDasharray = i + " " + i),
      (n.style.strokeDashoffset = i),
      n.getBoundingClientRect(),
      (n.style.transition = n.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var s = function () {
      var t = e(window).scrollTop(),
        a = e(document).height() - e(window).height(),
        s = i - (t * i) / a;
      n.style.strokeDashoffset = s;
    };
    s(), e(window).scroll(s);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(a).addClass("show")
        : jQuery(a).removeClass("show");
    }),
      jQuery(a).on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  e("[data-bg-src]").length > 0 &&
    e("[data-bg-src]").each(function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
      }),
    e("[data-border]").each(function () {
      var t = e(this).data("border");
      e(this).css("--th-border-color", t);
    }),
    e("[data-mask-src]").length > 0 &&
      e("[data-mask-src]").each(function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
          "mask-image": "url(" + t + ")",
          "-webkit-mask-image": "url(" + t + ")",
        }),
          e(this).addClass("bg-mask"),
          e(this).removeAttr("data-mask-src");
      }),
    e(".th-slider").each(function () {
      var t = e(this),
        a = e(this).data("slider-options"),
        n = t.find(".slider-prev"),
        i = t.find(".slider-next"),
        s = t.find(".slider-pagination"),
        o = a.autoplay,
        r = {
          slidesPerView: 1,
          spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
          loop: 0 != a.loop,
          speed: a.speed ? a.speed : 1e3,
          autoplay: o || { delay: 6e3, disableOnInteraction: !1 },
          navigation: { nextEl: i.get(0), prevEl: n.get(0) },
          pagination: {
            el: s.get(0),
            clickable: !0,
            renderBullet: function (e, t) {
              return (
                '<span class="' +
                t +
                '" aria-label="Go to Slide ' +
                (e + 1) +
                '"></span>'
              );
            },
          },
        },
        c = JSON.parse(t.attr("data-slider-options"));
      c = e.extend({}, r, c);
      new Swiper(t.get(0), c);
      e(".slider-area").length > 0 &&
        e(".slider-area").closest(".container").parent().addClass("arrow-wrap");
    }),
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
    e("[data-ani-delay]").each(function () {
      var t = e(this).data("ani-delay");
      e(this).css("animation-delay", t);
    }),
    e("[data-slider-prev], [data-slider-next]").on("click", function () {
      var t = e(this).data("slider-prev") || e(this).data("slider-next"),
        a = e(t);
      if (a.length) {
        var n = a[0].swiper;
        n && (e(this).data("slider-prev") ? n.slidePrev() : n.slideNext());
      }
    });
  var o = new Swiper(".testi-slider1", {
      effect: "fade",
      autoHeight: !0,
      pagination: { el: ".slider-pagination", clickable: !0 },
    }),
    r = new Swiper(".testi-thumb-slider1", { effect: "fade", autoHeight: !0 });
  (o.controller.control = r),
    (r.controller.control = o),
    (e.fn.activateSliderThumbs = function (t) {
      var a = e.extend({ sliderTab: !1, tabButton: ".tab-btn" }, t);
      return this.each(function () {
        var t = e(this),
          n = t.find(a.tabButton),
          i = e('<span class="indicator"></span>').appendTo(t),
          s = t.data("slider-tab"),
          o = e(s)[0].swiper;
        if (
          (n.on("click", function (t) {
            t.preventDefault();
            var n = e(this);
            if (
              (n.addClass("active").siblings().removeClass("active"),
              l(n),
              a.sliderTab)
            ) {
              var i = n.index();
              o.slideTo(i);
            }
          }),
          a.sliderTab)
        ) {
          o.on("slideChange", function () {
            var e = o.realIndex,
              t = n.eq(e);
            t.addClass("active").siblings().removeClass("active"), l(t);
          });
          var r = o.activeIndex,
            c = n.eq(r);
          c.addClass("active").siblings().removeClass("active"), l(c);
        }
        function l(e) {
          var t = e.position(),
            a = parseInt(e.css("margin-top")) || 0,
            n = parseInt(e.css("margin-left")) || 0;
          i.css("--height-set", e.outerHeight() + "px"),
            i.css("--width-set", e.outerWidth() + "px"),
            i.css("--pos-y", t.top + a + "px"),
            i.css("--pos-x", t.left + n + "px");
        }
      });
    }),
    e(".testi-thumb").length &&
      e(".testi-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      }),
    e(".testi-thumb2").length &&
      e(".testi-thumb2").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      });
  e("[data-sec-pos]").length &&
    e("[data-sec-pos]").imagesLoaded(function () {
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
    }),
    e(".filter-active").imagesLoaded(function () {
      if (e(".filter-active").length > 0) {
        var t = e(".filter-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: {},
        });
        e(".filter-menu-active").on("click", "button", function () {
          var a = e(this).attr("data-filter");
          t.isotope({ filter: a });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
      function () {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 &&
          e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: { columnWidth: 1 },
          }),
          e('[data-bs-toggle="tab"]').on("shown.bs.tab", function (a) {
            e(t).isotope({ filter: "*" });
          });
      }
    ),
    e(".filter-active-cat1").imagesLoaded(function () {
      if (e(".filter-active-cat1").length > 0) {
        var t = e(".filter-active-cat1").isotope({
          itemSelector: ".filter-item",
          filter: ".cat1",
          masonry: { columnWidth: 1 },
        });
        e(".filter-menu-active").on("click", "button", function () {
          var a = e(this).attr("data-filter");
          t.isotope({ filter: a });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          a = t.data("top"),
          n = t.data("right"),
          i = t.data("bottom"),
          s = t.data("left");
        t.css({ top: a, right: n, bottom: i, left: s })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    (e.fn.countdown = function () {
      e(this).each(function () {
        var t = e(this),
          a = new Date(t.data("offer-date")).getTime();
        function n(e) {
          return t.find(e);
        }
        var i = setInterval(function () {
          var e = new Date().getTime(),
            s = a - e,
            o = Math.floor(s / 864e5),
            r = Math.floor((s % 864e5) / 36e5),
            c = Math.floor((s % 36e5) / 6e4),
            l = Math.floor((s % 6e4) / 1e3);
          o < 10 && (o = "0" + o),
            r < 10 && (r = "0" + r),
            c < 10 && (c = "0" + c),
            l < 10 && (l = "0" + l),
            s < 0
              ? (clearInterval(i),
                t.addClass("expired"),
                t.find(".message").css("display", "block"))
              : (n(".day").html(o),
                n(".hour").html(r),
                n(".minute").html(c),
                n(".seconds").html(l));
        }, 1e3);
      });
    }),
    e(".counter-list").length && e(".counter-list").countdown();
  const v = {};
  function b() {
    const t = e(this),
      a = t.attr("src");
    if (!v[a]) {
      const t = e.Deferred();
      e.get(a, (a) => {
        t.resolve(e(a).find("svg"));
      }),
        (v[a] = t.promise());
    }
    v[a].then((a) => {
      const n = e(a).clone();
      t.attr("id") && n.attr("id", t.attr("id")),
        t.attr("class") && n.attr("class", t.attr("class")),
        t.attr("style") && n.attr("style", t.attr("style")),
        t.attr("width") &&
          (n.attr("width", t.attr("width")),
          t.attr("height") || n.removeAttr("height")),
        t.attr("height") &&
          (n.attr("height", t.attr("height")),
          t.attr("width") || n.removeAttr("width")),
        n.insertAfter(t),
        t.trigger("svgInlined", n[0]),
        t.remove();
    });
  }
  (e.fn.inlineSvg = function () {
    return this.each(b), this;
  }),
    e(".svg-img").inlineSvg(),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          n = parseInt(a.val(), 10);
        isNaN(n) || a.val(n + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          n = parseInt(a.val(), 10);
        !isNaN(n) && n > 1 && a.val(n - 1);
      });
    }),
    e(".color-switch-btns button").each(function () {
      const t = e(this),
        a = t.data("color");
      t.css("--theme-color", a),
        t.on("click", function () {
          const t = e(this).data("color");
          e(":root").css("--theme-color", t);
        });
    }),
    e(document).on("click", ".switchIcon", function () {
      e(".color-scheme-wrap").toggleClass("active");
    }),
    e(".marquee_mode").length &&
      e(".marquee_mode").marquee({
        speed: 100,
        gap: 0,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: !0,
        pauseOnHover: !0,
        startVisible: !0,
      }),
    e(".service1-tab-wrap li:first-child").addClass("active"),
    e(".service1-tab-content").hide(),
    e(".service1-tab-content:first").show(),
    e(".service1-tab-wrap li").mouseenter(function () {
      e(".service1-tab-wrap li").removeClass("active"),
        e(".service1-tab-content").hide();
      var t = e(this).find(".service1-tab-item").attr("data-bs-target");
      return e(t).fadeIn(), !1;
    }),
    window.gsap.registerPlugin(window.TweenMax);
  var y = document.querySelectorAll(".gsap-magnetic");
  function w(e) {
    var t = e.currentTarget,
      a = t.getBoundingClientRect();
    TweenMax.to(t, 1, {
      x: 50 * ((e.clientX - a.left) / t.offsetWidth - 0.5),
      y: 50 * ((e.clientY - a.top) / t.offsetHeight - 0.5),
      ease: Power4.easeOut,
    });
  }
  y.forEach((e) => {
    e.addEventListener("mousemove", w),
      e.addEventListener("mouseout", function (e) {
        TweenMax.to(e.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
      });
  }),
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      !1
    ),
    (document.onkeydown = function (e) {
      return (
        123 != event.keyCode &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
        (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
        void 0
      );
    });
})(jQuery);
