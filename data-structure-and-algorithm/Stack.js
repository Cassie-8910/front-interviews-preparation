/**
 * 手写栈
 * @constructor
 */
function Stack() {
    let items = []

    // 添加新元素到栈顶
    this.push = function (element) {
        items.push(element)
    }

    // 移除栈顶元素
    this.pop = function () {
        items.pop()
    }

    // 返回栈顶元素
    this.peek = function () {
        return items[items.length - 1]
    }

    // 判断栈是否为空
    this.isEmpty = function () {
        return !items.length
    }

    // 清除栈里所有元素
    this.clear = function () {
        items = []
    }

    // 返回栈中的元素个数
    this.size = function () {
        return items.length
    }

    // 遍历栈中的元素
    this.print = function () {
        return items.toString()
    }
}

let s = new Stack()

s.push('1')
s.push('2')

console.log(s.print())
console.log(s.size())
console.log(s.peek())
console.log(s.isEmpty())
console.log(s.pop())
console.log(s.print())
console.log(s.clear())
console.log(s.size())
