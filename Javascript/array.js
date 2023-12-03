// Array Creation
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3, 4, 5);
let arr3 = new Array(10).fill(0);
Array.isArray(arr); // return true or false

// Accessing Elements
let length = arr.length;
let first = arr[0];

// Looping
// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// forEach loop
arr.forEach((element, index, array) => {
    console.log(element);
});

// Mapping
let mapped = arr2.map((value) => value >= 2); //map the array to another array

// Filtering
let filtered = arr2.filter((value) => value >= 2); // return new array with filtered elements

// Reducing
let sum = arr2.reduce((accumulator, value) => accumulator + value, 0); // return a single values after calculation

// Adding & Removing Elements
arr.push(6); // add to end
arr.pop(); // remove from end
arr.unshift(0); // add to beginning
arr.shift(); // remove from beginning

// Slicing & Splicing
let slice = arr.slice(0, 2);
arr.splice(0, 2); // modifies original

// Finding Elements
let found = arr.find((value) => value >= 2); // return first element
let has = arr2.c(5); // return boolean

// Sorting
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending

// Reversing array
let reversed = arr.reverse();

// s Concatenating two arrays
let concatenated = [...arr, ...arr2];

//convert to string
let string = arr.toString();
let string2 = arr.join(" ");
let string3 = JSON.stringify(arr);

//comparing arrays
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [1, 2, 3, 4, 5];
let isEqual = JSON.stringify(arr4) === JSON.stringify(arr5);
