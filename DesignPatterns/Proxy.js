//代理模式【拦截操作】
//定义基本操作的自定义行为
//语法：let p = new Proxy(target, handle)
//target：用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
//handle：一个对象，其属性是当执行一个操作时定义代理的行为的函数。

//参考：https://www.w3cplus.com/javascript/use-cases-for-es6-proxies.html
//     https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

let obj = {
    a: 1,
    b: 2
}
const p = new Proxy(obj, {
    get(target, key, val) {
        if (key === 'c') {
            return '自定义结果'
        } else {
            return target[key]
        }
    },
    set(target, key, val) {
        if (val === 4) {
            target[key] = '自定义结果'
        } else {
            target[key] = val
        }
    }
});
console.log(obj.a);
console.log(obj.c);
console.log(p.a);
console.log(p.c);
obj.name = 'w'
p.name = 'z'
console.log(obj.name);
console.log(p.name);
p.age = 5
console.log(obj.age);
console.log(p.age);
console.log('----------------------------------------');

//老版本Proxy
//这里写一个懒加载图片例子
const imgLoad = (function() {
    const imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return {
        setSrc: function(src) {
            imgNode.src = src
        }
    }
}())
const loadImg = (function() {
    let img = new Image()
    img.onload = function() {
        imgLoad.setSrc(this.src)
    }
    return {
        setSrc: function(src) {
            imgLoad.setSrc('./loading.gif')
            img.src = src
        }
    }
}())
loadImg('./picture.png')