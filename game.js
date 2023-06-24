buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickPattern = [];

difficultyLevels = {
  veryEasy: 1000,
  easy: 500,
  medium: 250,
  hard: 100,
  extremelyhard: 50,
};

difficultyChoice = "hard";

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);

  randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  gamePattern.forEach((element) => {
    animatePress(element);
    playSound(element);
  });
}

function animatePress(name) {
  // Method 1: Using fadeOut/fadeIn
  // $(`#${name}`).fadeOut(difficultyLevels[difficultyChoice]);
  // $(`#${name}`).fadeIn(difficultyLevels[difficultyChoice]);

  // Method 2: using classes
  $(`.${name}`).addClass("pressed");
  setTimeout(() => {
    $(`.${name}`).removeClass("pressed");
  }, difficultyLevels[difficultyChoice]);
}

function playSound(name) {
  new Audio(`./sounds/${name}.mp3`).play();
}

$(".btn").click(function () {
  userClickPattern.push(this.id);
  animatePress(this.id);
  playSound(this.id);
});
