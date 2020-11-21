function recursive(num) {
    if (num <= 0) return "invalid number"
    if (num === 1 || num === 0) return 1
    else {
        return (num *= recursive(num - 1))
    }
}
console.log(recursive(4))

const iterative = function iter(num) {
    if (num <= 0) return "invalid number"
    if (num === 1 || num === 0) return 1
    for (let a = num - 1; a > 0; a--) {
        num *= a;
    }
    return num;
}
console.log(iterative(5))