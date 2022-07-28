function reverseString(str) {
    // split, reverse and join
    // make a new array with each letter of the string - reverse it and join it back
    return str.split("").reverse().join(""); 
}

console.log(reverseString("hi there"));