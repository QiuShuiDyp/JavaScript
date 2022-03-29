/*
 * @Author: QiuShui
 * @Date: 2022-03-27 21:37:00
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-27 21:58:45
 * @FilePath: /JS/原型和原型链/原型链.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
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

let instance = new SubType()

console.log(instance.getSuperValue())
