/*
 * @Author: QiuShui
 * @Date: 2022-03-27 14:53:23
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-27 16:09:27
 * @FilePath: /JS/原型和原型链/原型的作用.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

// 非原型实现
function Person(name) {
  this.name = name
  this.sayName = function () {
    console.log(this.name)
  }
}

const p1 = new Person('张三')
const p2 = new Person('李四')
console.log(p1.sayName === p2.sayName)

// 采用原型实现
// function Person(name){
//   this.name = name
// }
// Person.prototype.sayName = function(){
//   console.log(this.name)
// }

// const p1 = new Person('张三')
// const p2 = new Person('李四')
// console.log(p1.sayName === p2.sayName)
