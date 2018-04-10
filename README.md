![Mixture Logo](https://github.com/lover-drive/Mixture/raw/master/mixtureLogo.png)

Mixture is a simple and easy to use tool for creating your own javascript mixins.

> npm i -s the-mixture

## Usage
Just create a class that extends Mixture, define all your cool methods there and run `YourMixin.mixTo(yourObject)`.  
You also can define a method with the same name as your mixin class to initialize needed properties.

### Example:
```javascript
const Mixture = require('the-mixture')

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
```

### Output:
```
My cool mixin has been mixed to Ecila!
Hey, Ecila! It looks good.
My cool mixin has been mixed to Alice!
Hey, Alice! It looks good.
```

## License
Mixture is licensed under MIT, see LICENSE.md for details