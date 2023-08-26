var casw = $("#bq4");
var ncasw1 = $("#bq3");
var ncasw2 = $("#bq1");
var ncasw3 = $("#bq2");
var nbut = $("#nextquestionbtn");
var smadik = $(".smadik");
var shocked = $(".shocked");
var question = $("#question");
var maxwell = $("#maxwellie");

$(document).ready(function () {
  madeline.play();
});

var madeline = new Audio(
  "../audio/y2mate.com - MADELINE  INJI Official Audio.mp3"
);
var ncaswaud = new Audio("../audio/y2mate.com - laughing frog sped up.mp3");
var shockedaud = new Audio(
  "../audio/y2mate.com - Dramatic VineInstagram Boom  Sound Effect HD.mp3"
);
var duckaud = new Audio("../audio/y2mate.com - duck.mp3");

casw.on("click", function () {
  // duckaud.play();
  nbut.removeClass("hidden");
  smadik.removeClass("hidden");
  maxwell.removeClass("hidden");
  question.text("Tebrikler, Beyzasınız!");
  question.addClass("congrats");
});

ncasw1.on("click", wrongbtn);
ncasw2.on("click", wrongbtn);
ncasw3.on("click", wrongbtn);

function wrongbtn() {
  ncaswaud.play();
  shockedaud.play();
  shocked.removeClass("hidden");
  question.addClass("congrats");
  question.text("Cidden mi?");
  setTimeout(function () {
    question.removeClass("congrats");
    question.text("Beyza bu şarkıyı keşfettiğinde ne oynuyordu?");
    shocked.addClass("hidden");
  }, 3000);
}
