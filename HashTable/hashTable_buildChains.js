// 可以帮助我们选择使用哪种碰撞解决办法：如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；
// 如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法。

//---------开链法-------------------
function HashTable() {
    this.table = new Array(137)
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
    //开链法
    buildChains: function() {
        for (let i = 0, il = this.table.length; i < il; ++i) this.table[i] = []
    },
    put: function(data) {
        let pos = this.betterHash(data),
            index = 0
        if (this.table[pos][index] === undefined) {
            this.table[pos][index] = data
        } else {
            while (this.table[pos][index] !== undefined) ++index
            this.table[pos][index] = data
        }
    },
    get: function(data) {
        let index = 0,
            pos = this.betterHash(data)
        if (this.table[pos][index] === data) {
            return this.table[pos][index]
        } else {
            while (this.table[pos][index] !== data && this.table[pos][index] !== undefined) ++index
            return this.table[pos][index]
        }
        return undefined
    },
    show: function() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i][0] !== undefined) console.log(i + ' => ' + this.table[i]);
        }
    }

}
let table = new HashTable()
table.buildChains()
let names = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];
names.forEach(i => {
    table.put(i)
})
table.show()
console.log('-----------');
console.log(table.get('David'))