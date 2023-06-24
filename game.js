let level = 0;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let gameStarted = false;

difficultyLevels = {
  easy: 500,
  medium: 250,
  hard: 100,
};

difficultyChoice = "medium";

function nextSequence() {
  level++;
  $("#level-title").text(`Level ${level}`);

  randomNumber = Math.floor(Math.random() * 4);

  randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  gamePattern.forEach((element, i) => {
    setTimeout(() => {
      animatePress(element);
      playSound(element);
    }, i * difficultyLevels[difficultyChoice]);
  });
}

function animatePress(name) {
  $(`.${name}`).addClass("pressed");
  setTimeout(() => {
    $(`.${name}`).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  new Audio(`./sounds/${name}.mp3`).play();
}

$(".btn").click(function () {
  userClickPattern.push(this.id);
  animatePress(this.id);
  playSound(this.id);
});

$(document).keydown(function () {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }
});
