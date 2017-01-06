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