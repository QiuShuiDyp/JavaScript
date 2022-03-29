/*
 * @Author: QiuShui
 * @Date: 2022-03-28 10:09:23
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-28 11:48:04
 * @FilePath: /JS/原型和原型链/继承的实现方式.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
/*
 * 第一种：借用原型链，子类的prototype指向父类的实例，缺点：子类无法调用父类的构造函数
 */
function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.subproperty = false
}

SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subproperty
}

var instance = new SubType()

console.log(instance.getSuperValue())

/*
 * 第二种：盗用构造函数
 */
function SuperType(name) {
  this.name = name
}

SuperType.prototype.getName = function () {
  return this.name
}

function SubType() {
  SuperType.call(this, "张三")
  this.age = 29
}

var instance = new SubType()
console.log(instance.name)
console.log(instance.age)
console.log(instance.getName())

/*
 * 第二种：组合继承
 */
function SuperType(name) {
  console.log("SuperType")
  this.name = name
  this.colors = ["red", "blue", "green"]
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name) //第二次调用
  this.age = age
}

SubType.prototype = new SuperType() //第一次调用
SubType.prototype.sayAge = function () {
  console.log(this.age)
}

var instance1 = new SubType("张三", 24)
instance1.colors.push("yellow")
instance1.sayAge()
instance1.sayName()
console.log(instance1.colors)

var instance2 = new SubType("李四", 35)
console.log(instance2.colors)
instance2.sayAge()
instance2.sayName()

/*
 * 第二种：寄生式组合继承
 */
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
function inheritPrototype(subType, superType) {
  // 创建父类原型的副本，免去了一次构造函数的调用，直接继承superType的原型链副本
  let prototype = object(superType.prototype)
  // 解决由于重写原型导致默认constructor丢失的问题
  prototype.constructor = subType
  //
  subType.prototype = prototype
}

function SuperType(name) {
  console.log("SuperType")
  this.name = name
  this.colors = ["red", "blue", "green"]
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name) //第二次调用
  this.age = age
}

inheritPrototype(SubType, SuperType)

SubType.prototype.sayAge = function () {
  console.log(this.age)
}
var instance1 = new SubType("张三", 24)
instance1.colors.push("yellow")
instance1.sayAge()
instance1.sayName()
console.log(instance1.colors)

var instance2 = new SubType("李四", 35)
console.log(instance2.colors)
instance2.sayAge()
instance2.sayName()
