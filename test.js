const Mixture = require('./Mixture')

class MyCoolMixin extends Mixture {
  myCoolMixinMethod () {
    return 'Hey, ' + this.name + '! It looks good.'
  }

  MyCoolMixin () {
    this.name = this.name || 'Alice'
    console.log('My cool mixin has been mixed to ' + this.name + '!')
  }
}

class MyCoolClass {
  constructor () {
    this.name = 'Ecila'
    MyCoolMixin.mixTo(this)
  }
}

let myCoolObject = new MyCoolClass()
console.log(myCoolObject.myCoolMixinMethod())

let myAnotherCoolObject = {}
MyCoolMixin.mixTo(myAnotherCoolObject)
console.log(myAnotherCoolObject.myCoolMixinMethod())
