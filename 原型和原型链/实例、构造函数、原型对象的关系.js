/*
* @Author: QiuShui
* @Date: 2022-03-27 16:09:59
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-27 16:49:24
 * @FilePath: /JS/原型和原型链/实例、构造函数、原型对象的关系.js
* @Description: 
* 
* Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
*/

function Person(){

}



console.log(typeof Person.prototype) //object
console.log(Person.prototype) //{}
console.log(Person.prototype.constructor === Person) //true
console.log(Person.prototype.__proto__ === Object.prototype) //true
console.log(Person.prototype.__proto__.constructor === Object) //true
console.log(Person.prototype.__proto__.__proto__ === null) //true
console.log(Person.prototype.__proto__)

let person1 = new Person()
    person2 = new Person()

// 构造函数和实例以及原型对象是三个完全不同的对象
console.log(person1 !== Person)//true
console.log(person1 !== Person.prototype)//true
console.log(Person.prototype !== Person)//true
// 实例的__proto__指向原型对象
console.log(person1.__proto__ === Person.prototype)//true
console.log(person2.__proto__.constructor === Person)//true
console.log(person1.__proto__ === person2.__proto__) //true

// instanceof检查实例的原型链中是否包含指定构造函数的原型
console.log(person1 instanceof Person) //true
console.log(person2 instanceof Object) //true
console.log(Person.prototype instanceof Object) //true