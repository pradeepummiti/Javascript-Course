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
/*var avgJohn
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
}*/

/******************************************************************************
Functions
******************************************************************************/
/*function calculateAge(birthYear) {
	return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMary = calculateAge(1957);
var ageMike = calculateAge(1967);

console.log(ageJohn, ageMary, ageMike);

function yearUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 60 - age;

	if(retirement > 0) {
		console.log(firstName + " retires in " + retirement + " years");
	}
	else {
		console.log(firstName + " is already retired");
	}

	
}

yearUntilRetirement(1990, "John");
yearUntilRetirement(1967, "Mike");
yearUntilRetirement(1957, "Mary");*/

/******************************************************************************
Function Expression
******************************************************************************/
/*var occupation = function(job, firstName) {
	switch(job) {
		case "Teacher":
			return console.log(firstName + " teaches coding");
		case "Driver":
			return console.log(firstName + " drives a uber car");
		case "Designer":
			return console.log(firstName + " designs websites");
		default:
			return console.log(firstName + " does something else");
	}
} 

occupation("Teacher", "John");
occupation("Designer", "Mary");
occupation("Retired", "Mike");*/

/******************************************************************************
Arrays
******************************************************************************/
/*
// Array Initialization
var names = ["John", "Mary", "Mike"];
var years = new Array(1990, 1957, 1967);

console.log(names[0] + " was born in " + years[0]);
console.log(names[0].length);
console.log(names[1] + " was born in " + years[1]);
console.log(names[1].length);
console.log(names[2] + " was born in " + years[2]);
console.log(names[2].length);
console.log(names.length);

// Mutate array data
names[names.length] = "Jane";
console.log(names);

//Array with different data types
var johnDetails = new Array("John", "Smith", 1990, "Teacher", false);

johnDetails.push("Blue");
console.log(johnDetails);

johnDetails.unshift("Mr.");
console.log(johnDetails);

johnDetails.pop();
console.log(johnDetails);

johnDetails.shift();
console.log(johnDetails);

console.log(johnDetails.indexOf(1990));

var isDesigner = johnDetails.indexOf("Designer") === -1 ? "John is not a designer" : "John is a designer";
console.log(isDesigner);*/

/******************************************************************************
Coding Challenge 3
******************************************************************************/
/*var bill1 = 124, bill2 = 48, bill3 = 268;

function tipCalculator(billAmount) {
	var tip = 0;

	if(billAmount <= 50) {
		tip = billAmount * 0.2; 
	}
	else if(billAmount > 50 && billAmount <= 200) {
		tip = billAmount * 0.15;
	}
	else if(billAmount > 200) {
		tip = billAmount * 0.1;
	}

	return tip;
}

var tip1 = tipCalculator(bill1);
var tip2 = tipCalculator(bill2);
var tip3 = tipCalculator(bill3);

console.log(" The tip given at Restaurant 1 is $" + tip1);
console.log(" The tip given at Restaurant 2 is $" + tip2);
console.log(" The tip given at Restaurant 3 is $" + tip3);

var tips = new Array(tip1, tip2, tip3);
console.log(tips);

var paidAmount = new Array(bill1 + tip1, bill2 + tip2, bill3 + tip3);
console.log(paidAmount);*/

/******************************************************************************
Objects and Properties
******************************************************************************/
/*// Object Literal
var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ["Jane", "Mark", "Bob"],
	job: "Teacher",
	isMarried: false
};

console.log(john.firstName);
console.log(john["lastName"]);

var x = "birthYear";
console.log(john[x]);

john.job = "Designer";
console.log(john);

//new Object Syntax
var jane = new Object();
jane.firstName = "Jane";
jane["lastName"] = "Smith";
jane.birthYear = 1999;

console.log(jane);*/

/******************************************************************************
Objects and Methods
******************************************************************************/
// Object Literal
/*var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ["Jane", "Mark", "Bob"],
	job: "Teacher",
	isMarried: false,
	calculateAge: function() {
		this.age = 2019 - this.birthYear;
	}
};

john.calculateAge()
console.log(john);*/

/******************************************************************************
Coding Challenge 4
******************************************************************************/
var detailsMark = {
	firstName: "Mark",
	lastName: "Noble",
	mass: 100,
	height: 1.72,
	bmi: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

var detailsJohn = {
	firstName: "John",
	lastName: "Smith",
	mass: 90,
	height: 1.79,
	bmi: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

console.log(detailsMark.firstName + " : " + detailsMark.bmi());
console.log(detailsJohn.firstName + " : " + detailsJohn.bmi());

if(detailsJohn.bmi > detailsMark.bmi) {
	console.log(detailsJohn.firstName + " " + detailsJohn.lastName + " has more BMI");
}
else if(detailsJohn.bmi < detailsMark.bmi) {
	console.log(detailsMark.firstName + " " + detailsMark.lastName + " has more BMI");
}
else {
	console.log(detailsJohn.firstName + " " + detailsJohn.lastName + " and " + 
		detailsMark.firstName + " " + detailsMark.lastName + " have same BMI");
}
