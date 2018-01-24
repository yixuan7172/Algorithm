function merge(left, right) {
    let res = []
    while (left.length && right.length) {
        if (left[0] < right[0]) res.push(left.shift())
        else res.push(right.shift())
    }
    return res.concat(left).concat(right)
}

function mergeSort(arr) {
    let len = arr.length
    if (len === 1) return arr
    let mid = ~~(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}
let arr = [3, 1, 5, 2, 4]
console.log(mergeSort(arr))