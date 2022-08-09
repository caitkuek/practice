//* Capitalize first letter in a string

const str = 'hello i am a string';

// make charAt(0) -> h a capital letter
// + to join the rest of the string starting from 'e' (slice)
const str2 = str.charAt(0).toUpperCase() + str.slice(1)

console.log(str2)