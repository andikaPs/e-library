$(document).ready(function () {
  $("#nav").click(function (e) {
    e.preventDefault();
    $("#dropdown").toggleClass("hidden");
  });
});
