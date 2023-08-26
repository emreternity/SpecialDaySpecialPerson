var video = $("#videoep2");
var divmain = $("#divmain");
var bnuuy = new Audio("../audio/y2mate.com - bnuuy.mp3");
var hbday = new Audio(
  "../audio/y2mate.com - Black family singing happy birthday pt 1.mp3"
);

$(document).ready(function () {
  bnuuy.play();
  setTimeout(function () {
    bnuuy.pause();
    hbday.play();
    video.addClass("hidden");
    divmain.removeClass("hidden");
  }, 71000);
});
