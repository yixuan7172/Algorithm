// 可以帮助我们选择使用哪种碰撞解决办法：如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；
// 如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法。
function HashTable() {
    this.table = new Array(137)
    this.put = put
    this.simpleHash = simpleHash
    this.betterHash = betterHash
    this.show = show
}

function simpleHash(data) {
    let count = 0
    for (let i = 0, il = data.length; i < il; i++) {
        count += data.charCodeAt(i)
    }
    return count % this.table.length
}

function betterHash(data) {
    let count = 0
    const H = 37
    for (let i = 0, il = data.length; i < il; i++) {
        count += H * count + data.charCodeAt(i)
    }
    count = count % this.table.length
    if (count < 0) {
        count += this.table.length - 1
    }
    return parseInt(count)
}

function put(data) {
    let pos = this.betterHash(data)
    while (this.table[pos] !== undefined) {
        ++pos
    }
    this.table[pos] = data
}

function show() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            console.log(i + ' => ' + this.table[i]);
        }
    }
}
let table = new HashTable()
let names = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];
names.forEach(i => {
    table.put(i)
})
table.show()