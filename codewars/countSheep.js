//* Make a function that counts the number of sheep present in an array of sheep where some sheep may be missing from their place

arrSheep = [ true, true, true, false, true, false ]

function countSheep(arrSheep) {
    let counter = 0;
    for (let i = 0; i < arrSheep.length; i++) {
        if (arrSheep[i] === true) {
            counter += 1
        }
    }
    return counter
}

console.log(countSheep(arrSheep))