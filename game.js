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

difficultyChoice = "medium";

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);

  randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  gamePattern.forEach((element) => {
    $(`#${element}`).fadeOut(difficultyLevels[difficultyChoice]);

    playSound(element);

    $(`#${element}`).fadeIn(difficultyLevels[difficultyChoice]);
  });
}

function playSound(name) {
  new Audio(`./sounds/${name}.mp3`).play();
}

$(".btn").click(function () {
  userClickPattern.push(this.id);
  console.log(userClickPattern);
});
