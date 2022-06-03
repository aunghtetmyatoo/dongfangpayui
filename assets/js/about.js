$(document).ready(function () {
  $(".about .indicators li").click(function () {
    var i = $(this).index();
    var targetElement = $(".about .tabs li");
    targetElement.eq(i).addClass('active');
    targetElement.not(targetElement[i]).removeClass('active');
  });
  $(".about .tabs li").click(function () {
    var targetElement = $(".about .tabs li");
    targetElement.addClass('active');
    targetElement.not($(this)).removeClass('active');
  });
});
$(document).ready(function () {
  $(".slider .swiper-pagination span").each(function (i) {
    $(this).text(i + 1).prepend("0");
  });
});