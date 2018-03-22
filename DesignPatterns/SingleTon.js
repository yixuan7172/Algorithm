//单例模式【保证类有且仅有一个实例】
class SingleTon {
    constructor(name) {
        this.name = name
    }
}

const CreateInstacne = (function() {
    let instance = null
    return function(name) {
        if (!instance) {
            instance = new SingleTon(name)
        }
        return instance
    }
})()
let a = new CreateInstacne('a')
let b = new CreateInstacne('b')
console.log(a === b) //true