function Node(element) {
    this.element = element
    this.previous = null
    this.next = null
}

function DoubleLinkedList() {
    this.head = null
    this.tail = null
    this.length = 0
}
Object.assign(DoubleLinkedList.prototype, {
    insert(newElement, position = this.length) {
        if (typeof position !== 'number' || position < 0 || position > this.length) return false
        let newNode = new Node(newElement)
        let currentNode = this.head
        if (position === 0) {
            if (!this.head) {
                this.head = newNode
                this.tail = newNode
            } else {
                newNode.next = currentNode
                currentNode.previous = newNode
                this.head = newNode
            }
        } else if (position === this.length) {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        } else {
            let count = 0
            while (count++ < position) {
                currentNode = currentNode.next
            }
            newNode.next = currentNode
            newNode.previous = currentNode.previous
            currentNode.previous.next = newNode
            currentNode.previous = newNode
        }
        this.length++;
        return true
    },
    removeAt(position) {
        if (typeof position !== 'number' || position < 0 || position >= this.length) return false
        let currentNode = this.head
        if (position === 0) {
            if (this.length === 1) this.tail = null
            this.head = this.head.next
        } else if (position === this.length - 1) {
            this.tail = this.tail.previous
            this.tail.next = null
        } else {
            let count = 0
            while (count++ < position) {
                currentNode = currentNode.next
            }
            currentNode.previous.next = currentNode.next
            currentNode.next.previous = currentNode.previous
            currentNode.next = null
            currentNode.previous = null
        }
        this.length--;
        return true
    },
    remove(element) {
        let position = this.indexOf(element)
        if (position === -1) return false
        this.removeAt(position)
    },
    indexOf(element) {
        let currentNode = this.head
        let count = 0
        while (currentNode) {
            if (currentNode.element === element) return count
            count++;
            currentNode = currentNode.next
        }
        return -1
    },
    display(isInverse = false) {
        let currentNode
        if (!isInverse) {
            currentNode = this.head
            while (currentNode) {
                console.log(currentNode.element + ' ---> ' + this.length)
                currentNode = currentNode.next
            }
        } else {
            currentNode = this.tail
            while (currentNode) {
                console.log(currentNode.element + ' ---> ' + this.length)
                currentNode = currentNode.previous
            }
        }
    }
})
let list = new DoubleLinkedList()
list.insert('a')
list.insert('aa')
list.insert('aaa')
list.insert('aaaa')
list.insert('aaaaa')
list.display()
list.removeAt(0)
console.log('--------------');
list.display()