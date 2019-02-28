function insertSort(arr) {
    //为了给要插入的元素腾出空间，我们需要把所有的元素都往后移一位
    for (let i = 1, l = arr.length; i < l; ++i) {
        //令j等于当前的i，如果j大于0且索引j的值小于索引j-1的值，就交换它们两个的值
        //[索引1和0的值比]，[索引2和1、0的值相比]...
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; --j) {
            //交换后，arr[j]又等于原来arr[j-1]的值了，这时又会和前一个相比较
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        }
    }
    return arr
}

let arr = [3, 1, 2, 6, 5]
console.log(insertSort(arr))