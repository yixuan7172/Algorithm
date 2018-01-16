function Dictionary() {
    this.dataStotre = []
}
Dictionary.prototype = {
    constructor: Dictionary,
    find: function(key) {
        return this.dataStotre[key]
    },
    add: function(key, value) {
        if (this.dataStotre[key] === value) return
        this.dataStotre[key] = value
    },
    showAll: function() {
        let arr = Object.keys(this.dataStotre).sort()
        arr.forEach(i => {
            console.log(i + ' => ' + this.dataStotre[i]);
        })
    },
    remove: function(key) {
        delete this.dataStotre[key]
    },
    length: function() {
        let count = 0
        for (const i in Object.keys(this.dataStotre)) ++count
        return count
    },
    clear: function() {
        let arr = this.dataStotre
        for (const key in arr) {
            if (arr.hasOwnProperty(key)) delete arr[key];
        }
    }
}
let dic = new Dictionary()
dic.add('w', '2')
dic.add('y', '1')
dic.add('x', '5')
dic.add('b', '3')
dic.add('a', '2')
dic.add('e', '0.5')
dic.showAll()
console.log('----------------------');
dic.remove('w')
dic.showAll()
console.log(dic.length())
dic.clear()
console.log('----------------------');
console.log(dic.length());