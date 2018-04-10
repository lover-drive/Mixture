module.exports = class Mixture {
  static mixTo(_object) {
    if (typeof _object !== 'object') {
      return false;
    } else {
      for (let _key of Object.getOwnPropertyNames(this.prototype)) {
        if (_key !== 'constructor') {
          if (_object[_key] === undefined) {
            Object.defineProperty(
              _object,
              _key,
              Object.getOwnPropertyDescriptor(this.prototype, _key)
            );
          }
        }
      }
      if (typeof _object[this.name] === 'function') {
        _object[this.name]();
        delete _object[this.name];
      }
    }
  }
};
