/**
 * 反转链表
 * 在JS中 this.val代表当前节点的值，this.next指向下一个节点，this.next = null说明该节点是链表的最后一个节点
 * @param head
 * @returns {*[]}
 */
function reverseList(head) {
    let list = null;
    let p = head;
    let q = null
    if (p === null) return null
    while(p.next !== null){
        q = p.next;
        p.next = list;
        list = p;
        p = q;
    }
    p.next = list;
    list = p;
    return list
}


