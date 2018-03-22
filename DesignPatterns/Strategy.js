//策略模式
//定义一系列算法，封装起来，并且可以相互替换
const LevelObjs = {
    'A': function(money) {
        return 100 * money
    },
    'B': function(money) {
        return 80 * money
    },
    'C': function(money) {
        return 60 * money
    },
    'D': function(money) {
        return 40 * money
    }
}

function strategy(level, money) {
    return LevelObjs[level](money)
}
console.log(strategy('A', 100));