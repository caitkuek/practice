function checkPalindrome(string) {
    for (let i = 0; i < string.length/2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return 'not a palindrome';
        }
    }
    return 'is a palindrome';
}

console.log("madam " + checkPalindrome("madam"))