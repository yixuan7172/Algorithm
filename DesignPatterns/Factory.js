//工厂模式
function Factory(name, age) {
    let o = {}
    o.name = name
    o.age = age
    o.show = function() {
        console.log(this.name + '' + this.age)
    }
}
