/*
 * @Author: QiuShui
 * @Date: 2022-03-28 21:45:01
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-28 22:02:36
 * @FilePath: /原型和原型链/类.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
class Person {
  constructor(name) {
    this.name_ = name
    // 添加到this的所有内容都会存在于不同的实例上
    this.locate = () => console.log("instance")
  }
  // 类块中定义的所有内容都会定义在类的原型上
  locate() {
    console.log("prototype")
  }
  set name(newName) {
    this.name_ = newName
    console.log(this.name_)
  }
  get name() {
    console.log(this.name_)
    return this.name_
  }
  // 静态方法,定义在类本身上
  static locate() {
    console.log("class", this)
  }
  static toString() {
    console.log("toString", this.toString())
  }
  // 静态属性
  static age = 12
}
console.log(Person)
console.log(typeof Person)
let p = new Person("张三")
console.log(p instanceof Person)
console.log(Person === Person.prototype.constructor)
p.locate()
Person.prototype.locate()
p.name
p.name = "李四"
Person.locate()
console.log(Person.age)
