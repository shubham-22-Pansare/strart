!(function ($) {
  "use strict";

  //back-top-btn
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
  });

  //preloader
  $(document).ready(function () {
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 3500);
  });

  //portfolio
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-fliters li").on("click", function () {
      $("#portfolio-fliters li").removeClass("fliter-activce");
      $(this).addClass("fliter-activce");

      portfolioIsotope.isotope({
        filter: $(this).data("fliter"),
      });
      aos_init();
    });
  });

  //Skills
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  //venobox
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  //sticky
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 40) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
})(jQuery);
