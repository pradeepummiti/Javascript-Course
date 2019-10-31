/******************************************************************************
Variables and Data types 
******************************************************************************/
/*console.log('Hello World...!');

// Variable
var firstName = "John";
console.log(firstName);

// Number
var age = 29;
console.log(age);

// Boolean
var ageTrue = true;
console.log(ageTrue);

var job;
console.log(job);

job = "Project Engineer"
console.log(job);*/

/******************************************************************************
Variables and Type coercion 
******************************************************************************/
// Type coercion
/*var firstName = "John";
var age = 29;
console.log(firstName + ' ' + age);

var job, isMarried;
job = "Project Engineer";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + 
	". Is he married? " + isMarried);

// Variable mutation
age = "twenty nine";
job = "student";

// To display a pop-up window
alert(firstName + " is a " + age + " year old " + job + 
	". Is he married? " + isMarried);

// To let user answer a question
var lastName = prompt("What is his last name?");
console.log(firstName + ' ' + lastName);*/

/******************************************************************************
Basic Operators 
******************************************************************************/
// Math Operators
/*var currentYear = 2019;
var ageJohn = 29;
var ageFriend = 28;

var yearBorn = currentYear - ageJohn;
var yearFriend = currentYear - ageFriend;

console.log(yearBorn);
console.log(yearFriend);

console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);

// Logical Operators
var JohnOlder = ageJohn > ageFriend;
console.log(JohnOlder);

var JohnOlder = ageJohn < ageFriend;
console.log(JohnOlder);

// typeof Operator
console.log(typeof currentYear);
console.log(typeof ageJohn);
console.log(typeof ageFriend);
console.log(typeof yearBorn);
console.log(typeof yearFriend);
console.log(typeof JohnOlder);
console.log(typeof 'Hello World');

var x;
console.log(typeof x);*/

/******************************************************************************
Operator Precedence
******************************************************************************/
/*var currentYear = 2019;
var yearBorn = 1990;
var fullAge = 18;

// Multiple Operators
var isFullAge = (currentYear - yearBorn) >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = currentYear - yearBorn;
var ageFriend = 27;
var avg = (ageJohn + ageFriend) / 2;
console.log(avg);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4  6 // 32 - 6 // 26
console.log(x, y);

// More Operators
x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x - 1
console.log(x);*/

/******************************************************************************
Coding Challenge 1
******************************************************************************/
/*var markMass, markHeight, markBMI;
var johnMass, johnHeight, johnBMI;
var bmi;

markMass = 100;
markHeight = 1.72;
johnMass = 90;
johnHeight = 1.79;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI is ", markBMI);
console.log("Mark's BMI is ", johnBMI);

bmi = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + bmi);*/

/******************************************************************************
if/else statements
******************************************************************************/
/*var firstName = "John";
var civilStatus = "single";

var isMarried = false;

if(isMarried) {
	console.log(firstName + " is married");
}
else {
	console.log(firstName + " is not married");
}

var markMass, markHeight, markBMI;
var johnMass, johnHeight, johnBMI;
var bmi;

markMass = 100;
markHeight = 1.72;
johnMass = 90;
johnHeight = 1.79;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if(markBMI > johnBMI) {
	console.log("Mark's BMI is higher than John's ");
}
else {
	console.log("Mark's BMI is lower than John's ");
}*/

/******************************************************************************
Boolean Logic
******************************************************************************/
/*var firstName = "John";
var age = 29;

if(age < 13) {
	console.log(firstName + " is a boy");
}
else if((age >= 13) && (age < 20)) {
	console.log(firstName + " is a teenager");
}
else if((age >= 20) && (age < 30)) {
	console.log(firstName + " is a young man");
}
else {
	console.log(firstName + " is a man");
}*/

/******************************************************************************
Ternary Operators and Switch Statements
******************************************************************************/
/*
// Ternary Operators
var firstName = "John";
var age = 16;

age >=18 ? console.log(firstName + " can consume alcohol") 
: console.log(firstName + " cannot consume alcohol");

var drink = age >= 18? "Alcohol" : "Juice";
console.log(drink);

// Switch Statements
var job = "teacher";
switch(job) {
	case "teacher":
		console.log(firstName + " teaches kids to code");
		break;
	case "driver":
		console.log(firstName + " drives an uber");
		break;
	case "designer":
		console.log(firstName + " designs websites");
		break;
	default:
		console.log(firstName + " does something else");
		break;
}

switch(true) {
	case age < 13:
		console.log(firstName + " is a boy");
		break;
	case (age >= 13) && (age < 20):
		console.log(firstName + " is a teenager");
		break;
	case (age >= 20) && (age < 30):
		console.log(firstName + " is a young man");
		break;
	default:
		console.log(firstName + " is a man");
		break;
}*/

/******************************************************************************
Truthy and Falsy Values, and Equality Operators
******************************************************************************/
/*
// Falsy values - undefined, null, 0, '', NaN
// Truthy values - Not Falsy values

var height;

height = 23;

if(height || height === 0) {
	console.log("The variable is defined");
}
else {
	console.log("The variable is not defined");
}

// Equality Operator

if(height == '23') {
	console.log(" The == operator does type coercion");
}*/

/******************************************************************************
Coding Challenge 2
******************************************************************************/
var avgJohn
var avgMike;
var avgMary;

avgJohn = (89 + 129 + 103) / 3;
avgMike = (116 + 94 + 123) / 3;
avgMary = (97 + 134 + 105) / 3;


if((avgJohn > avgMike) && (avgJohn > avgMary)) {
	console.log("John's team is the winner with" + avgJohn + " points");
}
else if((avgMike > avgJohn) && (avgMike > avgMary)) {
	console.log("Mike's team is the winner with " + avgMike + " points");
}
else if((avgMary > avgJohn) && (avgMary > avgMike)) {
	console.log("Mary's team is the winner with " + avgMary + " points");
}
else if (avgJohn === avgMike === avgMary){
	console.log("The series ended in a draw");
}
else {
	console.log("No result");
}
