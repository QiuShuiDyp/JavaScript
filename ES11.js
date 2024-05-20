/**
 * ES11 (ES2020)
 */

/**
 * 空值合并运算符 ??
 */
let a = null
let b = undefined
console.log(a ?? 'default string') // default string
console.log(b ?? 'default string') // default string

/**
 * 可选链式操作符 ?.
 */
let user = {
  address: {
    street: 'imooc',
    getNum() {
      return 123
    },
  },
}
const street2 = user?.address?.street
const num2 = user?.address?.getNum?.()
console.log(street2, num2)

let object = {}
// object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment

/**
 * GlobalThis
 */
console.log(globalThis)
console.log(window)
// console.log(self)
// console.log(this)
