function longestWord(str) {
    let array = str.split(" ")
    let max = array[0]
    array.forEach((index) => {
        if (index.length > max.length) {
            max = index
        }
    })
    return max
}

console.log(longestWord("a longest word sequence"));