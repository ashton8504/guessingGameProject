const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber = 23;

function checkGuess(num) {
  if (num > secretNumber) {
    console.log("Too high");
  } else if (num < secretNumber) {
    console.log("Too low");
  } else if (num === secretNumber) {
    console.log("Correct");
  }
}

function askGuess() {
  rl.question("Enter a guess: ", answer => {
    checkGuess(parseInt(answer));

    if (parseInt(answer) === secretNumber) {
      console.log("You won!");
      rl.close();
    } else {
      askGuess();
    }
  });
}
askGuess(checkGuess());
