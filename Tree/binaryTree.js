class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
    show() {
        return this.data
    }
}
class BST {
    constructor() {
        this.root = null
    }
    insert(data) {
        let n = new Node(data, null, null)
        if (this.root === null) {
            this.root = n //若没有根节点，n就是根节点
        } else {
            let current = this.root,
                parent
            while (true) {
                parent = current
                if (data < current.data) { //小的数据插到左边，大的右边
                    current = current.left
                    if (current === null) {
                        parent.left = n
                        break
                    }
                } else {
                    current = current.right
                    if (current === null) {
                        parent.right = n
                        break
                    }
                }
            }
        }
    };
    //中序遍历（左根右）
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left)
            console.log(node.show())
            this.inOrder(node.right)
        }
    };
    //先序遍历（根左右）
    preOrder(node) {
        if (node !== null) {
            console.log(node.show())
            this.inOrder(node.left)
            this.inOrder(node.right)
        }
    };
    //后序遍历（左右根）
    postOrder(node) {
        if (node !== null) {
            this.inOrder(node.left)
            this.inOrder(node.right)
            console.log(node.show())
        }
    }
    find(data) {
        let current = this.root
        while (current !== null) {
            if (current.data === data) return current
            else if (current.data < data) current = current.right
            else current = current.left
        }
        return null
    }
    getMin() { //获取最小值
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }
    getMax() { //获取最大值
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }
    remove(data) { //删除
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, data) {
        if (node === null) return null
        if (node.data === data) {
            if (node.left === null && node.right === null) return null
            if (node.left === null) return node.right
            if (node.right === null) return node.left;
            //删除有两个子节点的节点，两种方法：
            //1、找左子树的最大值
            //2、找右子树的最小值
            let tempNode = this.getSmallest(node.right) //这里用的第二种
            node.data = tempNode.data //当前node.data替换成右子树最小值
            node.right = this.removeNode(node.right, tempNode.data) //右子树重新排
            return node
        } else if (node.data > data) {
            node.left = this.removeNode(node.left, data)
            return node
        } else {
            node.right = this.removeNode(node.right, data)
            return node
        }
    }
    getSmallest(node) {
        while (node.left !== null) node = node.left
        return node
    }
}
let bst = new BST()
let arr = [5, 8, 1, 25, 6, 81, 56]
arr.forEach(value => {
    bst.insert(value)
})
bst.inOrder(bst.root)
console.log('------------');
bst.preOrder(bst.root)
console.log('----------');
bst.postOrder(bst.root)
console.log('-----------');
console.log(bst.getMin())
console.log('======');
console.log(bst.getMax())
console.log('----------');
console.log(bst.find(81));
console.log('----------------------------------');
bst.remove(6)
bst.inOrder(bst.root)