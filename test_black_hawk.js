let isFound = false
let found = {}

function findElementPosUsingBinary(start, end, elementValue) {
    let startX = start
    let endX = end
    let mid = Math.floor((start + end) / 2)
    // if (end > start) found = {start, mid, end, found: false}
    let check = elementValue === arr[mid]
    if (check === true || end > start) {
        found = {start, mid, end, found: check}
        isFound = true
    } else if (elementValue > arr[mid]) {
        startX = mid + 1
    } else if (elementValue < arr[mid]) {
        endX = mid - 1
    }
    if (isFound === false) {
        findElementPosUsingBinary(startX, endX, elementValue)
    }
}

arr = [1, 2, 5, 6, 8, 9]
let element = 5
findElementPosUsingBinary(0, arr.length - 1, element)
// let isFound = found['foundAt'] !== -1
// let newArray = !isFound ? [...arr, element].sort((a, b) => a - b) : arr
if (found['found'] === false) arr.splice(found['start'], 0, element)
console.log(arr, found)

