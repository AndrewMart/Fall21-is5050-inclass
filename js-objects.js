/*Write the following basic object code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user =  {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete'
delete user.name;





//Assume we have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result should be 0.  Hint:  use the For/In loop (Links to an external site.)
var sum = 0;
for(var i in salaries){
    sum += salaries[i];
}
console.log(sum)
/*
Write the code for an array of objects called friends that represents a list of at least three of your friends.  Each friend should be represented as an object that contains the following: 
String properties:  firstName, lastName, gender. 
Date property: birthDate;
function getAge():  returns the age of the friend in whole years.  (You can use a regular property with a function as the value, or you can use a getter method (Links to an external site.).)
Print the contents of the array of objects using console.log();*/
var friends = [
    {
        'firstName': 'Josh',
        'lastName': 'Lyman',
        'gender': 'male',
        'birthDate': new Date(1995, 10, 30),
        getAge(){
            var currentTime = new Date();
            var age = currentTime.getFullYear()-this.birthDate.getFullYear();
            return age;
        }
    },
    {
        'firstName': 'Adam',
        'lastName': 'Peterson',
        'gender': 'male',
        'birthDate': new Date(1995, 4, 21),
        getAge(){
            var currentTime = new Date();
            var age = currentTime.getFullYear()-this.birthDate.getFullYear();
            return age;
        }
    },
    {
        'firstName': 'Savanna',
        'lastName': 'Martin',
        'gender': 'female',
        'birthDate': new Date(1997, 03, 29),
        getAge(){
            var currentTime = new Date();
            var age = currentTime.getFullYear()-this.birthDate.getFullYear();
            return age;  
        }
    }
];
console.log(friends[2].getAge());

//Instead of printing the entire array of objects, use a looping mechanism (e.g., forEach, For/In, etc.) to print out the following message to the console for each friend:  "<<firstName>> <<lastName>> is a <<age>>-year-old <<gender>>.
for(var i in friends){
    console.log(friends[i].firstName + " " + friends[i].lastName + " is a " + friends[i].getAge() + " year old " + friends[i].gender)
}
//Convert the array of objects you created in the previous step into a string by using the JSON.stringify() (Links to an external site.) method.  Print the contents of this string using console.log().
let JSONString = JSON.stringify(friends);
//Convert the JSON string you created in the previous step back into an array by using the JSON.parse() (Links to an external site.) method.  Print the contents of this array using console.log()
let objectFromJSON = JSON.parse(JSONString);
console.log(objectFromJSON);