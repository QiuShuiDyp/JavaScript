/*
 * @Author: QiuShui
 * @Date: 2022-03-27 17:14:23
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-27 17:58:59
 * @FilePath: /JS/原型和原型链/原型层级.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

function Person(name) {
  this.name = name
}

function hasPrototypeProperty(obj, property) {
  return !Object.hasOwnProperty(property) && (property in obj)
}
Person.prototype.name = "李四"
Person.prototype.work = "developer"
Person.prototype.language = ["英语"]
let p = new Person("张三")

console.log(p.name)
console.log(p.work)
console.log("还没删除name", "name" in p)
console.log(hasPrototypeProperty(p, "name"))
delete p.name
console.log("删除了name", "name" in p)
console.log(hasPrototypeProperty(p, "name"))
console.log(p.name)
p.language = ["英语", "中文"]
// p.language.push('中文')

let p2 = new Person("王五")
console.log(p.language)
console.log(p2.language)
console.log(Object.hasOwnProperty("name"))
