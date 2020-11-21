function secondSmallest(array) {
    array = array.sort(function(a, b){return a-b});
    let secMin = array[1]
    let secMax = array[array.length - 2]
    return console.log("second min is " + secMin + ", second max is " + secMax)
}
console.log(secondSmallest([7,6,3,1,5,11,12,-1,-2]))