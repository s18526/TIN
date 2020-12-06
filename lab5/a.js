let myPC = new Object()
myPC.graphics = "gtx1650"
myPC.processor = "ryzen5"
myPC.ram = 16
myPC.hdd = "1TB"

function properties(object) {
    let descr = ''
    for (var a in object) {
        descr += `${a}: ${typeof object[a]}\n`
    }
    return descr
}

console.log(properties(myPC))
