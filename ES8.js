/**
 * ES8 新特性
 */

/**
 * async, await, Promise
 */
async function asyncFunc() {
  return 'async'
}
console.log(asyncFunc()) // 返回一个 Promise 对象
asyncFunc().then((res) => console.log(res)) // async

const promise = () => {
  console.log('1')
  return new Promise((resolve, reject) => {
    resolve('2')
  })
}

const asyncFun = async () => {
  console.log('3')
  const test = await promise()
  console.log('4', test)
}

asyncFun()

/**
 * Object.entries,Object.values
 */
let obj = { a: 1, b: 2, c: 3 }
console.log(Object.entries(obj)) // [['a', 1], ['b', 2], ['c', 3]]
console.log(Object.values(obj)) // [1, 2, 3]

/**
 * String.prototype.padStart, String.prototype.padEnd
 */
let str = 'hello'
console.log(str.padStart(10, '123')) // 1231231hello
console.log(str.padEnd(10, '123')) // hello12312
