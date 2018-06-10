// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

/**   第一种方法 */
function Find(array, target) {
    let len = array.length
    let arr = []
    for (let i = 0; i < len; ++i) {
        arr.push(...array[i])
    }
    for (let i = 0; i < arr.length; ++i) {
        if (target === arr[i]) return true
    }
    return false
}

/**第二种 */
function Find2(array, target) {
    let rows = array[0].length, //列
        cols = array.length //行
    let c = 0,
        r = rows - 1

    while (c < cols && r >= 0) {
        if (array[c][r] === target) return true
        else if (array[c][r] < target) ++c
        else --r
    }
    return false
}
let arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
console.log(Find2(arr, 31));