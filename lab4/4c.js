function palindrome(str) {
    str1 = str.split("").reverse().join("")
    str = str.split("").join("")
    return str === str1
}
console.log(palindrome("bob"))
console.log(palindrome("text"))
console.log(palindrome("tenet"))
