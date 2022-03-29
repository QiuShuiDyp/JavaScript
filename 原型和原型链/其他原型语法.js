/*
 * @Author: QiuShui
 * @Date: 2022-03-27 21:02:34
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-27 21:45:25
 * @FilePath: /JS/原型和原型链/其他原型语法.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
function Person() {}
Person.prototype = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name)
  },
}

Object.defineProperty(Person, constructor, )