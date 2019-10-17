/******************************************************************************
Variables and Data types 
******************************************************************************/
/*console.log('Hello World...!');

// Variable
var firstName = "Pradeep";
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
/*var firstName = "Pradeep";
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
var agePradeep = 29;
var ageFriend = 28;

var yearBorn = currentYear - agePradeep;
var yearFriend = currentYear - ageFriend;

console.log(yearBorn);
console.log(yearFriend);

console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);

// Logical Operators
var pradeepOlder = agePradeep > ageFriend;
console.log(pradeepOlder);

var pradeepOlder = agePradeep < ageFriend;
console.log(pradeepOlder);

// typeof Operator
console.log(typeof currentYear);
console.log(typeof agePradeep);
console.log(typeof ageFriend);
console.log(typeof yearBorn);
console.log(typeof yearFriend);
console.log(typeof pradeepOlder);
console.log(typeof 'Hello World');

var x;
console.log(typeof x);*/

/******************************************************************************
Operator Precedence
******************************************************************************/
var currentYear = 2019;
var yearBorn = 1990;
var fullAge = 18;

// Multiple Operators
var isFullAge = (currentYear - yearBorn) >= fullAge;
console.log(isFullAge);

// Grouping
var agePradeep = currentYear - yearBorn;
var ageFriend = 27;
var avg = (agePradeep + ageFriend) / 2;
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
console.log(x);

