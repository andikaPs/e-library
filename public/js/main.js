$(document).ready(function () {
  $("#nav").click(function (e) {
    e.preventDefault();
    $("#dropdown").toggleClass("hidden");
  });

  $("#wishlist").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("bg-gray-400");
    $(this).toggleClass("bg-red-600");
  });

  let text = $(".judul").text();
  if (text.length > 22) {
    const cutText = text.slice(0, 20) + "....";
    $(".judul").text(cutText);
  }
  console.log($(".judul").text().length);
});
