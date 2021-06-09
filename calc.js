const input = document.querySelector(".calculator-body");
const result = document.querySelector(".result-screen");
const clearButton = document.querySelector(".clear-button");
const backspace = document.querySelector(".backspace");
const operation = document.querySelector(".operation");
const zeroButton = document.querySelector(".zero-button");
const equal = document.querySelector(".equal");
const division = document.querySelector(".divide");
const multiplication = document.querySelector(".multiply");
const subtraction = document.querySelector(".subtract");
const addition = document.querySelector(".add");
// empty buffer to take in multi-digit numbers
let buffer = "";
let ticker = []; // array of numbers and operations

input.addEventListener("click", function (event) {
  //   if clear button pressed, reset everything
  if (event.target === clearButton) {
    result.innerText = "0";
    buffer = "";
    ticker = [];
  }
  if (event.target === backspace) {
    console.log(result.innerText);
    if (result.innerText === "0" || result.innerText.length === 1) {
      buffer = "";
      result.innerText = "0";
    } else {
      console.log("you're hitting the backspace!");
      newBuffer = buffer.substring(0, buffer.length - 1);
      buffer = "0";
      buffer = newBuffer;
      result.innerText = buffer;
      console.log(newBuffer);
      console.log(newBuffer.length);
    }
  }
  if (event.target === zeroButton) {
    if (buffer === "") {
      buffer = "0";
      console.log(buffer);
    } else {
      buffer += event.target.innerText;
      result.innerText = buffer;
    }
  }
  if (
    event.target === equal ||
    event.target === division ||
    event.target === multiplication ||
    event.target === subtraction ||
    event.target === addition
  ) {
    if (buffer !== "") {
      result.innerText = "0";
      // push number from before operation was selected, empty buffer for new number coming in
      ticker.push(parseInt(buffer));
      buffer = "";
      // push current operation
      ticker.push(event.target.innerText);
      // console.log(typeof ticker);
      console.log(ticker);
      // if you hit the equal sign, return the answer
      console.log(event.target.innerText);
      if (event.target.innerText === "=") {
        // result.innerText = "0";
        // console.log(ticker);
        // console.log(typeof ticker[0]);
        const solve = (num1, op, num2) => {
          let res = 0;
          if (op === "+") res = num1 + num2;
          if (op === "−") res = num1 - num2;
          if (op === "×") res = num1 * num2;
          if (op === "÷") res = num1 / num2;
          return res;
        };
        result.innerText = solve(ticker[0], ticker[1], ticker[2]);
        buffer = result.innerText;
        ticker = [];
        console.log(buffer);
      }
    }
  }
  //select only the numbers, might just rewrite the html and put these as their own class and add an event listen to it separately!
  if (
    event.target !== backspace &&
    event.target !== clearButton &&
    event.target !== equal &&
    event.target !== division &&
    event.target !== multiplication &&
    event.target !== subtraction &&
    event.target !== addition &&
    event.target !== zeroButton
  ) {
    // add clicked elements to the buffer
    buffer += event.target.innerText;
    // console.log(buffer);
    result.innerText = buffer;
  }
});

/*

Create function that takes two numbers and an operator
You will always recieve a number possibly with multiple digits, then an operator, then another number then either an equal sign, OR another number and another operator

1. Fill the buffer with number strings then converting them into ints and placing them into the ticker array
2. Take operators and place them into array
3. Loop through the array feed each number/op/number into the master operation function until you've reached an equal sign

Take all clicks on numbers, convert them from a string to a number, add them to the array. Parse through the array and complete the operations!

// old code from 6/7
  //   if clear button pressed, reset everything
  if (event.target === clearButton) {
    result.innerText = "0";
    buffer = "";
    ticker = [];
  }
  // if addition pressed
  else if (event.target === addition) {
    if (buffer.length > 0) {
      // take complete number and add to ticker
      num = parseInt(buffer);
      ticker += num;
      buffer = "";
    }
  } else if (event.target === equal) {
    console.log(ticker);
    if (ticker.length > 1) {
      for (let i = 0; i < ticker.length; i++) {
        if (ticker[i] === "+") {
          result.innerText = ticker[i - 1] + ticker[i + 1];
        }
      }
    }
  } else {
    buffer += event.target.innerText;
    // console.log(buffer);
    result.innerText = buffer;
  }

numbers.addEventListener("click", function (event) {
  // console.log("bitch");
  for (let i = 0; i < numbers.length; i++) {
    const currentElement = numbers[i];
    currentElement.innerText = "yes!";
  }
});
*/
