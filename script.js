// burger.addEventListener("click", () => {
//   burger.classList.toggle("active");
//   nav.classList.toggle("active");
// });

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     burger.classList.remove("active");
//     nav.classList.remove("active");
//   });
// });

window.onload = function () {
  var slides = document.getElementsByClassName("carousel-item"),
    addActive = function (slide) {
      slide.classList.add("active");
    },
    removeActive = function (slide) {
      slide.classList.remove("active");
    };
  addActive(slides[0]);

  setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        slides[0].style.zIndex = 100;
        setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
        break;
      }
      if (slides[i].classList.contains("active")) {
        slides[i].removeAttribute("style");
        setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 4000);
};

$("#menu li").click(function (e) {
  e.preventDefault(); //Remove this in your main code
  $("#menu li").removeClass("active");
  $(this).addClass("active");
});
