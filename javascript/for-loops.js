var num = 5

for (var i=1;num<=120;i++ ) {
	console.log (num)
	var num = num+10
}

var num = 4096

for (var i =0; num!== 1; i++) {
	console.log(num);
	var num = num/2;
}

var presidents = [
	"George Washington",
	"John Adams",
	"Thomas Jefferson"
]

var num = 1

for (var i = 0; i < presidents.length; i++) {
	console.log("President #"+num+" "+"was "+presidents[i]+"!!!")
	var num = num+1
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
	console.log(prop)
}
/*   I'm adding this to make my js file bigger so it looks like a js project in gitHub---
<p>
    Instructions

Increment by 10

Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

Example output:

Current value is 5

Current value is 15

Current value is 25

...
  </p>
  <p>
Decrement by division

Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.

Example output:

Current value is 4096

Current value is 2048

Current value is 1024

...
  </p>
  <p>
Array iteration

Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

Example output:

President #1 was George Washington

President #2 was John Adams

President #3 was Thomas Jefferson

...
  </p>
  <p>
Object iteration

Use can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help

  </p>











*/