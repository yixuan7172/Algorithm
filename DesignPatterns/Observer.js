//观察者模式
class Observer {
    constructor() {
        this.messages = {}
    }
    on(eventName, fn) {
        this.messages[eventName] = this.messages[eventName] || []
        this.messages[eventName].push(fn)
    }
    fire(eventName, ...args) {
        let events = this.messages[eventName]
        if (!events) return
        events.forEach(fn => fn.apply(this, args))
    }
    off(eventName = null, fn = null) {
        if (eventName && fn) {
            //退订此事件函数
            if (this.messages[eventName] && this.messages[eventName].length) {
                this.messages[eventName] = this.messages[eventName].filter(val => val !== fn)
            }
        } else if (eventName) {
            //退订此事件的所有函数
            this.messages[eventName] = []
        } else {
            //退订所有事件
            this.messages = {}
        }
    }
    once(eventName, fn) {
        const self = this
        let func = function() {
            let args = Array.from(arguments)
            fn.apply(self, args)
            self.off(eventName, func)
        }
        self.on(eventName, func)
    }
}
//测试：
function a() {
    console.log('1111');
}

function b() {
    console.log('2222');
}
let o = new Observer()
o.on('test', a);
o.on('test', b)
o.fire('test')
console.log('---------------------------------------------');
o.off('test', a)
o.fire('test')
console.log('-----------------------------------------------');
o.once('test2', (a) => {
    console.log(a);
})
o.fire('test2', '1')
console.log('-------------------------------------');
o.fire('test2', '2')