/*******************大根堆*******************/
//交换
function swap(arr, i, j) {
    if (i === j) return;
    [arr[i], arr[j]] = [arr[j], arr[i]] //交换值
}
//堆化
function maxHeapify(arr, i, len) {
    let left = i * 2 + 1, //索引从0开始,2*i+1为左边
        right = i * 2 + 2,
        largest = i; //largest为父节点索引
    //若子节点大于父节点，标记
    if (left <= len && arr[left] > arr[largest])
        largest = left
    if (right <= len && arr[right] > arr[largest])
        largest = right

    //若标记有子节点，交换父子位置，并递归运算
    if (largest !== i) {
        swap(arr, i, largest) //交换值
        maxHeapify(arr, largest, len)
    }
}

function heapSort(arr) {
    let len = arr.length
    if (len <= 1) return arr

    //建最大堆
    for (let i = ~~(len / 2); i >= 0; i--) {
        maxHeapify(arr, i, len)
    }
    //堆排序
    for (let j = 0; j < len; ++j) {
        swap(arr, 0, len - j - 1)
        maxHeapify(arr, 0, len - j - 2)
    }
    return arr
}
let arr = [3, 1, 7, 5, 2, 4, 6]
console.log(heapSort(arr))