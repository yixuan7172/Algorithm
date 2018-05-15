function quickSort(arr) {
    if (arr.length <= 1) return arr
    let midIndex = ~~(arr.length / 2)
    let midVal = arr.splice(midIndex, 1)
    let left = [],
        right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midVal) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(midVal, quickSort(right))
}

let arr = [5, 1, 4, 8, 2]
    // console.log(quickSort(arr));


//---------------------------------------------------------------------------------------


function quickSort2(arr) {
    return quick(arr, 0, arr.length - 1)
}

function quick(arr, left, right) {
    let index
    if (arr.length > 1) {
        index = partition(arr, left, right)
        if (left < index - 1) quick(arr, left, index - 1)
        if (right > index) quick(arr, index, right)
    }
    return arr
}

function partition(arr, left, right) {
    let pivot = arr[~~((left + right) / 2)]
    let i = left,
        j = right
    while (i <= j) {
        while (compare(arr[i], pivot) === -1) i++;
        while (compare(arr[j], pivot) === 1) j--;
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function compare(a, b) {
    return a === b ? 0 : a < b ? -1 : 1
}
// console.log(quickSort2(array))

let array = []

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成len长度的随机数组
function generateArr(len) {
    for (var i = 0; i < len; i++) {
        array.push(random(1, len));
    }
}
generateArr(10000000);
console.time('xm');
quickSort2(arr);
console.timeEnd('xm'); // xm: 5254.090ms

console.time('ryf');
quickSort(arr);
console.timeEnd('ryf'); // ryf: 10071.621ms