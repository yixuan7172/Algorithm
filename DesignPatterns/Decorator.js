//装饰器模式
//动态往一个类添加新的行为
class Book {
    constructor() {}
    cost() {
        return 100
    }
}

function Decorator1(book) {
    let c = book.cost()
    book.cost = function() {
        return c + 20
    }
}

function Decorator2(book) {
    let c = book.cost()
    book.cost = function() {
        return c + 200
    }
}
let b = new Book()
Decorator1(b)
Decorator2(b)
console.log(b.cost());