# Number Guesser (script.js) - Codecademy 

Codecademy > Backend Engineer Path > JavaScript Syntax, Part I

See result here => https://senseilein.github.io/number-guesser-starting/
<br>

## To practise the following concepts:

* **Intro to JavaScript** data types, built-in methods, and variables

* **Conditionals** (use if, else if, else, switch, and ternary syntax to control the flow of a program in JavaScript)

* **Functions** (function syntax, passing data to functions, the return keyword, ES6 arrow functions, and concise body syntax)
<br>


## Project Goals 
**Write JavaScript functions to power a small guessing game**
* **I have updated the `script.js` file** based on the instructions provided below.

* the html, css and game.js files were provided with the instructions (not my code)
<br>


## Instructions
  1. **Create a `generateTarget()` function** that will be called at the start of each new round in order to generate the new secret target number.
  This function should return a random integer between 0 and 9.
  
  2. **Create a `compareGuesses()` function** that will be called each round to determine which guess is closest to the target number.
  Return `true` if the human player wins, and `false` if the computer player wins. If both players are tied, the human user should win.
  
  3. **Create an `updateScore()` function** that will be used to correctly increase the winner’s score after each round.
  
  4. **Create an `advanceRound()` function** that will be used to update the round number after each round. `advanceRound()` should increase the value of currentRoundNumber by 1.
 <br> 
  
  
## Project extension
   * Create a separate `getAbsoluteDistance()` function that takes two numbers and returns the distance, and then use that inside your `compareGuesses()` function.
   
   * Add functionality to check whether the user guess is between 0 and 9 and `alert()` the user that their number is out of range. It’s not possible to set a number outside this range with the `+` and `=` buttons, but users can do so by typing directly in the input field.
