// function add (a, b) {
//   return a + b;
// }
//
// //console.log(add(3,4));
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd));

// var groupA = ['bob','joe'];
// var groupB = ['jose','akbar'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['bob', 2];
var person2 = ['stacy', 900];
var greeting = [...person,...person2]

function greet (name, age){
  console.log('Hi ' + name + ', you are' + age);
}
greet(...person);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = [...names, 'Lantz'];

final.forEach(function(name) {
  console.log('hi '+ name);
});
