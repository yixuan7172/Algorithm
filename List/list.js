function Node(element) {
    this.element = element
    this.next = null
    this.previous = null
}

function List() {
    this.head = new Node('head')
}
List.prototype = {
    constructor: List,
    find: function(item) {
        let currNode = this.head
        while (currNode.next !== null && currNode.element !== item) currNode = currNode.next
        if (currNode.element === item) return currNode
        else throw '找不到'
    },
    insert: function(newElement, item) {
        let newNode = new Node(newElement),
            currNode = this.find(item)
        newNode.next = currNode.next
        newNode.previous = currNode
        currNode.next = newNode
    },
    display: function() {
        let currNode = this.head
        while (currNode.next !== null) {
            currNode = currNode.next
            console.log(currNode.element)
        }
    },
    remove: function(item) {
        let currNode = this.find(item)
        currNode.previous.next = currNode.next
        currNode.next.previous = currNode.previous
        currNode.next = null
        currNode.previous = null
    },
    reverseDisplay: function() {
        let currNode = this.findLast()
        while (currNode.previous !== null) {
            console.log(currNode.element)
            currNode = currNode.previous
        }
    },
    findLast: function() {
        let currNode = this.head
        while (currNode.next !== null) currNode = currNode.next
        return currNode
    }
}
let test = new List()
test.insert('a', 'head')
test.insert('b', 'a')
test.insert('c', 'b')
test.insert('d', 'c')
test.display()
console.log('------------')
test.remove('b')
test.display()
console.log('-------------')
test.reverseDisplay()
console.log(test.find('eaaaa'));