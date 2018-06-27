function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let repeat = {}
    for (let i = 0; i < numbers.length; ++i) {
        if (repeat[numbers[i]] !== undefined) {
            duplication[0] = numbers[i]
            return true
        } else {
            repeat[numbers[i]] = numbers[i]
        }
    }
    return false
}
let arr = [1, 2, 3, 2]
console.log(duplicate(arr, []));