function selectSort(arr) {
    for (let i = 0, l = arr.length; i < l; ++i) {
        let min = i //以第一个作为最小的索引
        //和后面的相比较
        for (let j = i + 1; j < l; ++j) {
            //如果前面的比后面的大
            if (arr[i] > arr[j]) {
                min = j;//则把最小的索引变成较小的那个
                //再把值交换
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

let arr = [4, 1, 3, 2]
console.log(selectSort(arr))
