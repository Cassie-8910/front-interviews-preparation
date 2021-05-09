/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则返回true,否则返回false。假设输入的数组的任意两个数字都互不相同。（ps：我们约定空树不是二叉搜素树）
 * 输入： [4,8,6,12,16,14,10]
 * 输出： true
 * 二叉搜索树 左子树比都根结点小，右子树都比根结点大
 * @param sequence
 * @constructor
 */
function VerifySquenceOfBST(sequence) {
    // write code here
    if(sequence.length === 0) {
        return false
    }
    let root = sequence[sequence.length - 1]
    let i = 0
    for (; i<sequence.length-1; i++) {
        if(sequence[i] > root) {
            break
        }
    }
    let j = i
    for(; j < sequence.length-1; j++) {
        if(sequence[j] < root) {
            return false
        }
    }

    let left = true
    let right = true
    if(i>0) {
        left = VerifySquenceOfBST(sequence.slice(0,i))
    }
    if(i<sequence.length-1) {
        right = VerifySquenceOfBST(sequence.slice(i, sequence.length-1))
    }

    return left && right
}

console.log(VerifySquenceOfBST([4,8,6,12,16,14,10]))
