$(window).on("load", function () {
  $("#preloader").fadeOut();
});

$(document).ready(function () {
  const toTop = $("#gotop");
  const fourNumberElm = $("#fourNumber");
  let hasExecuted = false;

  $(window).scroll(function () {
    // nav
    if (window.scrollY > 80) {
      $("nav").addClass("shadow");
    } else {
      $("nav").removeClass("shadow");
    }
    // toTop
    if (window.scrollY > 450) {
      toTop.addClass("opacity-100").removeClass("opacity-0");
    } else {
      toTop.addClass("opacity-0").removeClass("opacity-100");
    }
    // fourNumber
    if (
      fourNumberElm.offset().top < $(window).scrollTop() + $(window).height() &&
      !hasExecuted
    ) {
      setTimeout(() => {
        incrementStats();
        hasExecuted = true;
      }, 150);
    }
  });

  toTop.click(function () {
    $(document).scrollTop(0);
  });

  $(window).scroll();
});

function incrementStats() {
  $(".counter").each(function (_, counter) {
    $(counter).text(0);
    const target = +$(counter).attr("data-target");
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const currentValue = Math.ceil(progress * target);
      $(counter).text(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        $(counter).text(target);
      }
    }
    requestAnimationFrame(updateCounter);
  });
}

// swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
