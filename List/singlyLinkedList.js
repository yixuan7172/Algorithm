function Node(element) {
    this.element = element
    this.next = null
}

function SinglyLinkedList() {
    this.head = null
    this.length = 0
}

Object.assign(SinglyLinkedList.prototype, {
    indexOf(element) {
        let currentNode = this.head
        let count = 0
        while (currentNode) {
            if (currentNode.element === element) {
                return count
            }
            count++;
            currentNode = currentNode.next
        }
        return -1
    },
    insert(insertElement, position) {
        if (typeof position === 'number' && position >= 0 && position <= this.length) {
            let newNode = new Node(insertElement)
            let currentNode = this.head
            let previous = null
            let count = 0
            if (position === 0) {
                newNode.next = currentNode
                this.head = newNode
            } else {
                while (count++ < position) {
                    previous = currentNode
                    currentNode = currentNode.next
                }
                newNode.next = currentNode
                previous.next = newNode
            }
            this.length++;
            return true
        }
        throw '插入位置不满足要求'
    },
    removeAt(position) {
        if (typeof position === 'number' && position >= 0 && position < this.length) {
            let currentNode = this.head
            let previous = null
            let count = 0
            if (position === 0) {
                this.head = currentNode.next
            } else {
                while (count++ < position) {
                    previous = currentNode
                    currentNode.currentNode.next
                }
                previous.next = currentNode.next
            }
            this.length--;
            return true
        }
        return false
    },
    remove(element) {
        let position = this.indexOf(element)
        if (position === -1) return false
        this.removeAt(position)
    },
    display() {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.element) console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
})
let list = new SinglyLinkedList()
list.insert('a', 0)
list.insert('aa', 0)
list.insert('aaa', 0)
list.display()
console.log(list.length);