buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);

  randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);
}
