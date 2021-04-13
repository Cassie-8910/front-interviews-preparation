/**
 * 查找两个节点的最近的一个共同父节点，可以包括节点自身
 * @param oNode1
 * @param oNode2
 */
function commonParentNode(oNode1, oNode2) {
    let parent1 = oNode1.parentNode
    let parent2 = oNode2.parentNode
    if(parent1 === parent2) {
        return parent1
    } else {
        commonParentNode(parent1, parent2)
    }
}
