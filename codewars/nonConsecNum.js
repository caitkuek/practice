// test array
arr = [1, 2, 3, 4, 6, 7, 8]

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        // count backwards - otherwise it will return the number before the first non-consecutive num
        if (arr[i - 1] + 1 !== arr[i]) {
            return arr[i]
        }
    }
    return null
}

console.log(firstNonConsecutive(arr))