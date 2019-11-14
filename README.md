# NodeCalculator
11/13/2019
Calculator operations = +, -, *, /, equals and clear.

To install and run test suites:
$npm install<br>
$cd NodeCalculator<br>
$npm run test<br>

Example of use in .js file:<br>
const newCalc = new Calculator(10).equals();<br>
console.log('new calc = ', newCalc)<br>

expected output = new calc = 10


11/14/2019
Updated repo and added a Reverse Polich Notation functionality.<br>
Tests included in Jest.<br>

To install and run test suites:
$npm install<br>
$cd NodeCalculator<br>
$npm run test<br>

Example of use in .js file:<br>
const newCalc = new RPNCalc("1 2 + 7 - 2 *").newEvaluate();<br>
console.log("newCalc", newCalc);<br>

 expected output = newCalc -8
  
!!!OR TO FOLLOW PEMDAS VERSION!!!
const newCalc = new Calculator("1 2 + 7 - 2 *").equals();<br>
console.log('new calc = ', newCalc)<br>

expected output = new calc = -11
