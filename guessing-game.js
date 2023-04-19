// Step 1

let secretNumber = 23;

// Step 2

function checkGuess(num) {
  if (num > secretNumber) {
    console.log("Too high");
  } else if (num < secretNumber) {
    console.log("Too low");
  } else if (num === secretNumber) {
    console.log("Correct");
  }
}

console.log(checkGuess(23));
