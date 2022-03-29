/*
 * @Author: QiuShui
 * @Date: 2022-03-29 12:42:09
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 18:32:09
 * @FilePath: /原型和原型链/类继承.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
class Vehicle {
  constructor() {
    this.hasEngine = true
  }
  static identify(){
    console.log('identify')
  }
}

class Bus extends Vehicle {
  constructor() {
    // 不能在super之前调用this，否则会报错
    super() //相当于super.constructor()
    console.log(this instanceof Vehicle, "constructor")
    console.log(this)
  }

  static identify(){
    super.identify();
  }
}
let b = new Bus()
Bus.identify()
