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
$("#menu li").click(function (e) {
  e.preventDefault(); //Remove this in your main code
  $("#menu li").removeClass("active");
  $(this).addClass("active");
});
