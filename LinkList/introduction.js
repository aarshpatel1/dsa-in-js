class LinkList {
    constructor(data) {
        this.size = 1
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
    }
    appendNode(nodeData) {
        this.size++
        const newNode = {
            value: nodeData,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
    }
    insertNode(nodeData, index) {
        if (index > this.size) {
            return console.log('Index out of range')
        }
        this.size++
        const newNode = {
            value: nodeData,
            next: null
        }
        let currentNode = this.head
        let currentIndex = 0
        while (currentIndex < index - 1) {
            currentNode = currentNode.next
            currentIndex++
        }
        newNode.next = currentNode.next
        currentNode.next = newNode
    }
    traiversing() {
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
    }
}

let linkList = new LinkList(1)
linkList.appendNode(2)
linkList.appendNode(3)
linkList.appendNode(4)
linkList.traiversing();
console.log('-------------------')
linkList.insertNode(5, 2)
linkList.traiversing();

console.log(linkList)