//动态规划三要素：
//最优子结构，边界，状态转移公式


function getWays(n) {
    if (n < 1) return 0
    if (n === 1) return 1
    if (n === 2) return 2
    return getWays(n - 1) + getWays(n - 2)
}

function getWays2(n) {
    let cache = []
    if (n < 1) return 0
    else if (n === 1) return 1
    else if (n === 2) return 2
    else {
        cache[1] = 1
        cache[2] = 2
        for (let i = 3; i <= n; ++i) {
            cache[i] = cache[i - 1] + cache[i - 2]
        }
    }
    return cache[n]
}

//最终版，动态规划解法
//只保留上上个值和上一个值
function getWays3(n) {
    if (n < 1) return 0
    else if (n === 1) return 1
    else if (n === 2) return 2
    let a = 1, //上上个
        b = 2, //上一个
        res = 0
    for (let i = 3; i <= n; ++i) {
        res = a + b
        a = b
        b = res
    }
    return res

}
console.time()
console.log(getWays2(1000000)); //23
console.timeEnd()

console.time()
console.log(getWays3(1000000)); //7.3
console.timeEnd()