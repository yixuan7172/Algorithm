function Set() {
    this.dataStore = []
    this.size = this.dataStore.length
}
Set.prototype = {
    constructor: Set,
    add: function(data) {
        if (this.dataStore.indexOf(data) === -1) {
            this.dataStore.push(data)
            return true
        }
        return false
    },
    remove: function(data) {
        if (this.dataStore.indexOf(data) > -1) {
            delete this.dataStore[data]
            return true
        }
        return false
    },
    contains: function(data) {
        if (this.dataStore.indexOf(data) > -1) return true
        return false
    },
    //并集
    union: function(set) {
        let newSet = new Set()
        set.dataStore.forEach(value => {
            newSet.add(value)
        })
        this.dataStore.filter(value => {
            if (!set.contains(value)) newSet.add(value)
        })
        return newSet.dataStore.sort()
    },
    //交集
    intersect: function(set) {
        let newSet = new Set()
        this.dataStore.filter(value => {
            if (!set.contains(value)) newSet.add(value)
        })
        set.dataStore.filter(value => {
            if (!this.contains(value)) newSet.add(value)
        })
        return newSet.dataStore.sort()
    },
    //是否为set子集
    subset: function(set) {
        if (this.size > set.size) return false
        else {
            this.dataStore.forEach(value => {
                if (!set.contains(value)) return false
            })
            return true
        }
    },
    //与set的不同
    difference: function(set) {
        let newSet = new Set()
        this.dataStore.forEach(value => {
            if (!set.contains(value)) newSet.add(value)
        })
        if (newSet.size === 0) return 'none'
        return newSet.dataStore.sort()
    },
    show: function() {
        return this.dataStore.sort()
    }
}
let set = new Set()
set.add('a')
set.add('b')
set.add('c')
set.add('d')
set.add('e')
let set2 = new Set()
set2.add('a')
set2.add('b')
set2.add('c')
set2.add('d')
set2.add('cc')
set2.add('dd')
let set3 = new Set()
set3.add('c')
set3.add('d')
set3.add('e')
console.log(set2.show());
console.log(set.size);
console.log(set.contains('b'));
console.log('-----------------');
console.log(set.union(set2));
console.log('-----------------');
console.log(set.intersect(set2));
console.log('---------------');
console.log(set3.subset(set));
console.log(set2.difference(set3));
console.log(set.show());