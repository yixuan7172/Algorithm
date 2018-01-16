function Dictionary() {
    this.dataStotre = []
    this.find = find
    this.remove = remove
    this.showAll = showAll
    this.add = add
    this.length = length
    this.clear = clear
}

function find(key) {
    return this.dataStotre[key]
}

function add(key, value) {
    if (this.dataStotre[key] === value) return
    this.dataStotre[key] = value
}

function showAll() {
    let arr = Object.keys(this.dataStotre).sort()
    arr.forEach(i => {
        console.log(i + ' => ' + this.dataStotre[i]);
    })
}

function remove(key) {
    delete this.dataStotre[key]
}

function length() {
    let count = 0
    for (const i in Object.keys(this.dataStotre)) {
        count++
    }
    return count
}

function clear() {
    let arr = this.dataStotre
    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            delete arr[key];
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