//* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(num) {
    let numbers = num.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

console.log(highAndLow("1 2 3 4 5"))