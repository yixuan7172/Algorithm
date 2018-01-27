function quickSort(arr) {
    if (arr.length <= 1) return arr
    let midIndex = ~~(arr.length / 2)
    let midVal = arr.splice(midIndex, 1)
    let left = [],
        right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midVal)
            left.push(arr[i])
        else
            right.push(arr[i])
    }
    return quickSort(left).concat(midVal, quickSort(right))
}
let arr = [5, 1, 4, 8, 2]
console.log(quickSort(arr));