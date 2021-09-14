





//Print your first and last name in double quotes with a line break in the middle.
var name = "\"Andrew \n Martin\"";
console.log(name);
//Store your first name in a variable in all lower case letters.  Then, use a string function to print the name in all upper case letters
var firstname = "andrew";
console.log(firstname.toUpperCase());
//Store your your first and last name in separate variables.  Then use string concatenation to put them together (with a space in the middle) and store in a separate variable.
var first = "Andrew";
var last = "Martin";
var fullName = first + " " + last;
console.log(fullName);
//Use string concatenation to print "Hi, my name is <<Full Name>>" where <<Full Name>> is your full name stored in a variable.
console.log("Hi my name is " + fullName);
// With your full name stored in a variable, split your first and last name into separate variables.
var splitName = fullName.split(" ");
var splitFirst = splitName[0];
var splitLast = splitName[1];
console.log(splitFirst);
console.log(splitLast);
// Create a string variable that holds a string with leading/trailing spaces.  Use a string function to trim the spaces and store the result in another variable.
var leadTrail = "  Here is a string that had leading and trailing spaces.  ";
var trimmedString = leadTrail.trim()
console.log(trimmedString)
//TODO:  Use a string function to report the number of characters in your full name (not including space).
var fullNameNoSpace = fullName.split(" ").join("")
var charCountName = fullNameNoSpace.length;
console.log(charCountName);
// Use a string function that gives the position of the first letter of your last name in your full name.  For example, in "Kelly Fadel", the "F" is in position 6.
var position = fullName.indexOf("M");
console.log(position);
// Use a string function that reports whether the letter "A" (either upper or lower case) is in a string variable that contains your full name.
var includesA = fullName.toLowerCase().includes("a");
console.log(includesA);
// Use a string function that replaces "ASP.NET" with "Node.js" in the following string:  "I am learning ASP.NET"
var toNode = "I am learning ASP.NET"
console.log(toNode.replace("ASP.NET", "Node.js"));
// Store the value 9.6877 in a variable.  Then use a number function to store the number as a new variable with only two decimal places.
var number = 9.6877;
console.log(number.toPrecision(3));
// Write a line of code that shows the remainder of 23 / 7.
console.log(23 % 7);
// Use a number function to convert the string "23" into a number and store it in a new variable.
var twentyThree = "23";
var toNum = parseInt(twentyThree);
console.log(toNum);
// Use a number function to convert the string "15.23" into a number and store it as a numerical value.
var fifteenAndALittle = "15.23";
var numerical = Number(fifteenAndALittle);
console.log(numerical);
// Write code that uses one or more a number functions to return a random number between 1 and 10.
var random = Math.random() * 10;
console.log(random);
// Use the Number() function to see if the following values can be converted to numbers:  5, "5", "Test"
console.log(Number(5));
console.log(Number("5"));
console.log(Number("Test"));
// Write code that adds 0.1 and 0.2, stores the result in a variable, and prints the variable.  Is the result what you expected?  If not, how can you fix it? 
var add = 0.1 + 0.2;
console.log(add)
// Create a new variable that stores today's date.  Then, print three lines to the console that reports the month, day, and year separately.
var today = new Date();
console.log(today);
// Create a new variable that stores your birth date.
// Compute how many days have elapsed since your birth date.