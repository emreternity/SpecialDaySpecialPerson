var casw = $("#bq2");
var ncasw1 = $("#bq3");
var ncasw2 = $("#bq1");
var ncasw3 = $("#bq4");
var nbut = $("#nextquestionbtn");
var smadik = $(".smadik");
var shocked = $(".shocked");
var question = $("#question");

var ncaswaud = new Audio("../audio/y2mate.com - laughing frog sped up.mp3");
var shockedaud = new Audio(
  "../audio/y2mate.com - Dramatic VineInstagram Boom  Sound Effect HD.mp3"
);
var duckaud = new Audio("../audio/y2mate.com - Dinazor ile kubağa.mp3");

casw.on("click", function () {
  duckaud.play();
  nbut.removeClass("hidden");
  smadik.removeClass("hidden");
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
    question.text("KFC siparişinizde promosyon ister misiniz?");
    shocked.addClass("hidden");
  }, 3000);
}
