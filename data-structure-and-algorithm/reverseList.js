/**
 * 反转链表
 * 在JS中 this.val代表当前节点的值，this.next指向下一个节点，this.next = null说明该节点是链表的最后一个节点
 * @param head
 * @returns {*[]}
 */
function reverseList(head) {
    let arr = []
    let start = head
    while(start) {
        arr.push(start.val)
        start = start.next()
    }
    return arr.reverse()
}


