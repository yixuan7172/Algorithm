// 可以帮助我们选择使用哪种碰撞解决办法：如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；
// 如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法。

//---------线性探测法----------------
function HashTable() {
    this.table = new Array(137)
    this.values = []
}
HashTable.prototype = {
    constructor: HashTable,
    simpleHash: function(data) {
        let count = 0
        for (let i = 0, il = data.length; i < il; i++) count += data.charCodeAt(i)
        return count % this.table.length
    },
    betterHash: function(data) {
        const H = 37
        let count = 0
        for (let i = 0, il = data.length; i < il; i++) count += H * count + data.charCodeAt(i)
        count = count % this.table.length
        if (count < 0) count += this.table.length - 1
        return parseInt(count)
    },
    put: function(data) {
        let pos = this.betterHash(data)
        if (this.table[pos] === undefined) {
            this.table[pos] = data
            this.values[pos] = data
        } else {
            while (this.table[pos] !== undefined) ++pos
            this.table[pos] = data
            this.values[pos] = data
        }
    },
    get: function(data) {
        let pos = this.betterHash(data)
        for (let i = pos, il = this.values.length; i < il; ++i) {
            if (this.values[i] === data) return this.values[i]
        }
        return undefined
    },
    show: function() {
        for (let i = 0, il = this.values.length; i < il; i++) {
            if (this.values[i] !== undefined) console.log(i + ' => ' + this.values[i]);
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
console.log('-----------');
console.log(table.get('Clayton'))