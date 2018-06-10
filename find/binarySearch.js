// 有两种计算 mid 的方式：
// mid = (l + h) / 2
// mid = l + (h - l) / 2
// l + h 可能出现加法溢出，最好使用第二种方式。

function binarySearch(arr, val) {
    let left = 0,
        right = arr.length - 1
    while (left <= right) {
        let m = left + ~~((right - left) / 2)
        if (arr[m] === val) return m
        else if (arr[m] > val) right = m - 1
        else left = m + 1
    }
    return -1
}
let arr = [1, 2, 3, 3, 3, 4, 5, 7, 8, 9, 10]
console.log(binarySearch(arr, 3));