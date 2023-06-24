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

function animatePress(name) {
  $(`.${name}`).addClass("pressed");
  setTimeout(() => {
    $(`.${name}`).removeClass("pressed");
  }, 100);
}

function checkAnswer() {
  for (let i = 0; i < userClickPattern.length; i++) {
    if (userClickPattern[i] !== gamePattern[i]) {
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 250);
      $("#level-title").text(`Game Over! Press any key to try again!`);
      resetGame();
      return;
    }
  }
  if (userClickPattern.length === gamePattern.length && gameStarted) {
    setTimeout(() => {
      nextSequence();
    }, 1000);
  }
}

function nextSequence() {
  userClickPattern = [];

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

function playSound(name) {
  new Audio(`./sounds/${name}.mp3`).play();
}

function resetGame() {
  gameStarted = false;
  gamePattern = [];
  level = 0;
}

$(document).keydown(function () {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }
});

$(".btn").click(function () {
  if (gameStarted) {
    userClickPattern.push(this.id);
    animatePress(this.id);
    playSound(this.id);
    checkAnswer();
  }
});
