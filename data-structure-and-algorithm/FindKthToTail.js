/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 输入一个链表，输出该链表中倒数第k个结点。如果该链表长度小于k，请返回空。
 * 双指针法 一个快指针一个慢指针 快指针先走k步，然后再和慢指针一起出发 当快指针指向空时，慢指针所在位置就是倒数第k个
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail( pHead ,  k ) {
    // write code here
    if(!pHead) {
        return null
    }
    let count = 0; // fast跑了几步
    let fast = pHead
    let slow = pHead
    while(fast) {
        fast = fast.next
        if(count >= k) {
            slow = slow.next
        }
        count++
    }
    if(count < k){
        return null
    }
    return slow
}
