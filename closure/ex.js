"use strict";

function strBuilder(str) {
	// if (typeof str === 'string') {
	// 	return function(x) {
	// 		strBuilder(str + x)
	// 	}
	// }
	// return str;
	return function next(x) {
		
		if (typeof x === 'string') {
			return strBuilder(str + x)
		}

		return str;
	}

	
	
}

var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(susan() === "Hello, Susan");
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");
// console.log(strBuilder("Hello, "))
// console.log(hello);
// console.log(kyle)
// console.log(susan)
// console.log(strBuilder("Hello, ")("")("Kyle")(".")("")())
