/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * 输入 {5,4,#,3,#,2,#,1}
 * 输出 [5,4,3,2,1]
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    // root为根结点
    let res = [] // 存储结果
    let tree = []  // 已经遍历的队列
    tree.push(root)

    while (tree.length) {
        let node = tree.shift()
        if (node.left) {
            tree.push(node.left)
        }
        if (node.right) {
            tree.push(node.right)
        }
        res.push(node.val)
    }
    return res
}
