function binarySearch(array, num) {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (num === array[middleIndex]) {
            return console.log("Target was found at index " + middleIndex);
        }
        if (num > array[middleIndex]) {
            console.log("Searching the right side of Array")
            startIndex = middleIndex + 1;
        }
        if (num < array[middleIndex]) {
            console.log("Searching the left side of array")
            endIndex = middleIndex - 1;
        } else {
            console.log("Not Found this loop iteration. Looping another iteration.")
        }
    }
    console.log("Target value not found in array");
}

console.log(binarySearch([1, 10, 15, 25, 33], 25));