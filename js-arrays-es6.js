// MIS 5050/6050
// JavaScript Bootcamp 2 In-class Exercise

//  1.  function concatArray(arr1, arr2):  concatenates the arr1 and arr2 arrays together and returns the resulting array.  Hint:  use the concat() array method.

function concatArray(arr1, arr2) {
    let newArray = arr1.concat(arr2);
    return newArray;
}

let newArray = concatArray([1,2], [3,4]);
console.log(newArray);

// concatArray using FUNCTION EXPRESSION
const concatArray2 = function(arr1, arr2) {
    return arr1.concat(arr2);
}

// call concatArray2
let newArray2 = concatArray2([1,2],[3,4]);
console.log(newArray2);
// 2. function arrayAsString(arr, separator):  converts the arr array to a string, with each item in the array separated by the separator string.  Returns the resulting string.  Hint:  use the join() array method.

function arrayAsString(arr, separator) {
    return arr.join(separator);
}

// concatArray using FUNCTION EXPRESSION and ES6 ARROW FUNCTION syntax

const concatArray3 = (arr1, arr2) => {
    return arr1.concat(arr2);
}

let newArray3 = concatArray3([1,2],[3,4]);
console.log(newArray3);


console.log(arrayAsString(["test1", "test2"], " - "));

// 3.  function isItemInArray(arr, item):  checks to see if item exists in the arr array.  If so, returns true; otherwise, returns false.  Hint:  use the includes() array method.

function isItemInArray(arr, item) {
    return arr.includes(item);
}

console.log(isItemInArray([1,2,3,4], 4));
console.log(isItemInArray([1,2,3,4], 5));

// 4.  function findArrayPosition(arr, item):  searches for the position of item in the arr array.  If the item is found, returns the following string with the proper values inside the <<>> placeholders:  "<<Item>> is in position <<position>> out of <<number of items>> in the array."  Otherwise, returns:  "<Item>> not found in the array."  Hint:  use the indexOf() array method.

function findArrayPosition(arr, item) {
    let position = arr.indexOf(item);

    if (position >= 0) {
        return `${item} is in position ${position} out of ${arr.length} items in the array`;
    } else {
        return `${item} not found in array`;
    }
}

console.log(findArrayPosition([1,2,3,4], 4));
console.log(findArrayPosition([1,2,3,4], 5));

// 5.  function sortStringArray(arr, direction):  sorts the string elements in the arr array in either ascending or descending order depending on the direction parameter.  Returns the sorted array.  Hint: Use the sort() and reverse() array methods.

function sortStringArray(arr, direction) {
    if (direction > 0) {
        return arr.sort();
    } else {
        return arr.sort().reverse();
    }
}

console.log(sortStringArray(["a", "c", "b", "d"], 1));
console.log(sortStringArray(["a", "c", "b", "d"], 0));

// 6.  function stackArray(arr, numToRemove, itemToAdd):  removes numToRemove items from the front of the arr array. If itemToAdd is not undefined (meaning something was passed in for this argument), adds this item to the front of the array.  Otherwise, does not add anything. Returns the modified array. Hint:  use the splice() or shift()/unshift() array methods.

function stackArray(arr, numToRemove, itemToAdd) {
    if(itemToAdd)
    {
        arr.splice(0,numToRemove,itemToAdd);
        
    } else {
        arr.splice(0,numToRemove);
    }

    return arr;
}

console.log(stackArray([1,2,3,4], 2, 5));
console.log(stackArray([1,2,3,4], 2));

//7. function getNumbersOver(arr, value):  checks the arr array and returns a new array with all values greater than value.  Hint: use the filter() array method.

function getNumbersOver(arr, value) {

    let newArray = arr.filter(function (item) {
        //function should return true if item passes the test
        return item > value;
    
    });

    return newArray;
}

console.log(getNumbersOver([1,2,3,4,5], 3));

// 8. function printArrayContents(arr):  Calls console.log() to print each element in the arr array along with its index. 

function printArrayContents(arr) {
    arr.forEach(function(item, index) {
        console.log(index + ": " + item + "\n");
    })
}

printArrayContents([1,2,3,4,5]);

// 9. function findStartsWithLetter(arr, letter):  finds and returns the first element in the arr array that starts with letter.  If no such element is found returns the string "No element found that starts with <<letter>>." 

function findStartsWithLetter(arr, letter) {
    let result = arr.find(function(item) {
        return item.startsWith(letter);
    });

    return result || `No element found that starts with "${letter}"`
}

console.log(findStartsWithLetter(["apple", "banana", "grape"], "a"));
console.log(findStartsWithLetter(["apple", "banana", "grape"], "c"));

// 10. function doubleNumbers(arr):  checks to make sure that all values in the arr array are numbers.  If so, returns a new array that contains the doubled values of each value in arr.  

function doubleNumbers(arr) {
    if (arr.every(function(item) {
        return typeof item === "number"        
    })) {
        return arr.map(function(item) {
            return item * 2;
        });
    } else {
        return "Not all items are numbers."
    }
}

console.log(doubleNumbers([1,2,3,4]));
console.log(doubleNumbers([1,2,3,"four"]));