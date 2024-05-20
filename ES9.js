/**
 * ES9 (ECMAScript 2018)
 */

/**
 * Async iterators 异步迭代器
 */
const asyncIterator = () => {
  const array = [1, 2]
  return {
    next: function () {
      if (array.length) {
        return Promise.resolve({
          value: array.shift(),
          done: false,
        })
      }
      return Promise.resolve({
        done: true,
      })
    },
  }
}

let iterator = asyncIterator()

const test = async () => {
  await iterator.next().then(console.log) // {value: 1, done: false}
  await iterator.next().then(console.log) // {value: 2, done: false}
  await iterator.next().then(console.log) // {done: true}
}

test()

/**
 * Object rest properties
 */
let obj = {
  a: 1,
  b: 2,
  c: 3,
}
const { a, ...rest } = obj
const result = { a, ...rest }
console.log(a, rest) // 1 {b: 2, c: 3}
console.log(result) // {a: 1, b: 2, c: 3}

/**
 * Promise.prototype.finally
 */
const promise = new Promise((resolve, reject) => {
  resolve('resolved')
  reject('rejectd')
})

promise
  .then((res) => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })
