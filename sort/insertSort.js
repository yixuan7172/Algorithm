//适合少量元素
//升序
function insertSort(arr) {
    for (let i = 1, il = arr.length; i < il; i++) {
        let j = i,
            current = arr[j]
        while (--j >= 0 && arr[j] > current)
            arr[j + 1] = arr[j];
        //由于j--,所以j+1,把current插入此位置
        arr[j + 1] = current
    }
    return arr
}
//降序
function insertSort2(arr) {
    for (let i = 1, il = arr.length; i < il; i++) {
        let j = i,
            current = arr[j]
        while (--j >= 0 && arr[j] < current)
            arr[j + 1] = arr[j]
        arr[j + 1] = current
    }
    return arr
}
let arr = [3, 1, 5, 2, 6]
console.log(insertSort2(arr))