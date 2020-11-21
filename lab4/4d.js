function alphabeticalOrder(str) {
    str = str.split("").sort().join("")
    return str
}
console.log(alphabeticalOrder("webmaster"))
