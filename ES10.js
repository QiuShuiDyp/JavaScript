/**
 * ES10 (ECMAScript 2019)
 * Array.prototype.{flat, flatMap}扁平化嵌套数组
 * Object.fromEntries
 * String.prototype.{trimStart, trimEnd}
 * Symbol.prototype.description
 * Optional catch binding
 * Array.prototype.sort() is now required to be stable
 */

/**
 * Array.prototype.{flat, flatMap}扁平化嵌套数组
 */
let arr = [1, 2, [3, 4]]
console.log(arr.flat()) // [1, 2, 3, 4]
let arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat(2)) // [1, 2, 3, 4, 5, 6]

// 替换写法
console.log([].concat(...arr))
console.log(arr.reduce((arr, val) => arr.concat(val), [])) // [1, 2, 3, 4, 5, 6]

/**
 * Object.fromEntries
 */
let obj = { a: 1, b: 2, c: 3 }
let entries = Object.entries(obj)
console.log(entries) // [['a', 1], ['b', 2], ['c', 3]]
console.log(Object.fromEntries(entries)) // {a: 1, b: 2, c: 3}

/**
 * String.prototype.{trimStart, trimEnd}
 */
let str = ' hello '
console.log(str.trimStart()) // 'hello '
console.log(str.trimEnd()) // ' hello'

/**
 * Optional catch binding
 */
// ES10之前，catch块中的参数是必须的
try {
  throw new Error('test')
} catch (e) {
  console.log(e)
}
// ES10之后，catch块中的参数是可选的
try {
  throw new Error('test')
} catch {
  console.log('catch')
}

/**
 * JSON.stringify修复特殊字符处理
 */
JSON.stringify('😊')
// '"😊"'

/**
 * Function.prototype.toString()返回真实代码
 */
function foo() {
  // es10新特性
  console.log('imooc')
}
console.log(foo.toString())
