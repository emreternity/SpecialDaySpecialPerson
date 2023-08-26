var mapsinput = $("#mapsinput");

var bgmusic = new Audio(
  "../audio/y2mate.com - Mother Mother  Hayloft II Burning Barn Acoustic.mp3"
);

$(document).ready(function () {
  bgmusic.play();
});

mapsinput.on("keypress", function (event) {
  if (event.key == "Enter") {
    if (mapsinput.val() == "Rusya" || mapsinput.val() == "rusya") {
      window.open("../html/q8.html", "_self");
    } else {
      mapsinput.addClass("wrong");
      console.log(mapsinput.attr("placeholder", "Yanlış, Tekrar Dene."));
    }
  }
});
