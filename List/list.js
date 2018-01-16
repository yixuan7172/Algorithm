function Node(element) {
    this.element = element
    this.next = null
    this.previous = null
}

function List() {
    this.head = new Node('head')
    this.find = find
    this.insert = insert
    this.remove = remove
    this.display = display
    this.findLast = findLast
    this.reverseDisplay = reverseDisplay
}

function find(item) {
    let currNode = this.head
    while (currNode.next !== null && currNode.element !== item) {
        currNode = currNode.next
    }
    return currNode
}

function insert(newElement, item) {
    let newNode = new Node(newElement),
        currNode = this.find(item)
    newNode.next = currNode.next
    newNode.previous = currNode
    currNode.next = newNode
}

function display() {
    let currNode = this.head
    while (currNode.next !== null) {
        currNode = currNode.next
        console.log(currNode.element)
    }
}

function remove(item) {
    let currNode = this.find(item)
    currNode.previous.next = currNode.next
    currNode.next.previous = currNode.previous
    currNode.next = null
    currNode.previous = null
}

function reverseDisplay() {
    let currNode = this.findLast()
    while (currNode.previous !== null) {
        console.log(currNode.element)
        currNode = currNode.previous
    }
}

function findLast() {
    let currNode = this.head
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode
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