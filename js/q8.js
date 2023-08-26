var video = $("#videoep2");
var divmain = $("#divmain");
var bnuuy = new Audio("../audio/y2mate.com - bnuuy.mp3");
var bleach = new Audio(
  "../audio/y2mate.com - On the Precipice of Defeat Orchestral VersionBleach TYBW Episode 4 OSTEpic Orchestral Cover.mp3"
);

$(document).ready(function () {
  bleach.play();
  setTimeout(function () {
    video.addClass("hidden");
    divmain.removeClass("hidden");
  }, 60000);
});
