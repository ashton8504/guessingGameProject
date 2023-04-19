const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber = randomInRange(0, 100);

function randomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function checkGuess(num) {
  if (num > secretNumber) {
    console.log("Too high");
  } else if (num < secretNumber) {
    console.log("Too low");
  } else if (num === secretNumber) {
    console.log("You Won!");
    rl.close();
  }
}

function askGuess() {
  rl.question("Enter a guess: ", answer => {
    const num = parseInt(answer);
    checkGuess(num);
    if (num === secretNumber) {
      rl.close();
    } else {
      askGuess();
    }
  });
}

function askRange() {
  rl.question("Enter a max number: ", maxAnswer => {
    rl.question("Enter a min number: ", minAnswer => {
      const rangeString = `I am thinking of a number between ${minAnswer} and ${maxAnswer}...`;
      console.log(rangeString);
      secretNumber = randomInRange(parseInt(minAnswer), parseInt(maxAnswer));
      askGuess();
    });
  });
}

askRange();
