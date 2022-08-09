//* Capitalize first letter of each word in a string

const str = 'i am an important string';

// split into an array of strings where there is a blank space 
const arr = str.split(" ");

// loop through the above arr 
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const finalStr = arr.join(" ")
console.log(finalStr)