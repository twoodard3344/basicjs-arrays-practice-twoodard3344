// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

/***********************/
/* Using Arrays        */
/***********************/

// Complete the Following Exercises

// ----------------------------------------------------------------------------------------------
console.log("Exercise One"); // Do not modify the lines like this before each exercise, these are to make the console output more readable :)
// Accessing an array
// - First, log the word "jumped" to the console by accessing it in the array.
// - Second, log the last word of the array to the console.
// - Your code should output the following:
//     jumped
//     fence
let sentence = ["The", "dog", "jumped", "over", "the", "fence"];
// Write your code here 👇
console.log(sentence[2]);
console.log(sentence[sentence.length - 1]);

// ----------------------------------------------------------------------------------------------
console.log("Exercise Two");
// Adding up Numbers
// - Create a statement which adds up every number of the array, assigning
//   the sum to a new variable.
//   Then log the sum to the console.
//
//   You don't need to do anything fancy here, like loops or functions,
//   just access every index of the array and add up the numbers in one big equation.
// - Your code should output the following:
//     28
let numbers = [3, 4, 5, 7, 9];
// Write your code here 👇
let result = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
console.log(result)
// ----------------------------------------------------------------------------------------------
console.log("Exercise Three");
// Creating an array
// - Create a new array and initialize with the names of five different colors.
//   The array should be assigned to a variable named "colors"
// - Log that array to the console.
// - Then Log the length of the array to the console (it should print 5)
// Write your code here 👇
let colors = ["rose", "blush", "flamingo","salmon", "coral"];
console.log(colors);
console.log(colors.length);

// ----------------------------------------------------------------------------------------------
console.log("Exercise Four");
// Updating an array
// - Add 5 names of people to the array.
// - Log that array to the console.
// - Using the index variable, assign a new name to the given index.
// - Then log the modified array to the console.
let names = []; // Don't modify this line.
let index = 2;
// Write your code here 👇
names.push("Jon Snow", "Daenarys Targaryen", "Cersei Lannister", "Ned Stark", "Arya Stark");
console.log(names);
names[index] = "Varys"
console.log(names);
// ----------------------------------------------------------------------------------------------
console.log("Exercise Five");
// Concatenating an array
// - Concatenate the second array to the first array.
//   You will need to assign the result to a new variable.
//   Hint: Using + will NOT work...
// - Then log the new array to the console.
let firstArray = ["This", "will", "make"];
let secondArray = ["a", "combined", "array."];
// Write your code here 👇

let arrayResult = firstArray.concat(secondArray);
console.log(arrayResult);


// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise and remove any extranneous console.log()
// statements from your code.
