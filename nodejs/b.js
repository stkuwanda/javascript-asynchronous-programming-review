var a = require('./a');

var ClassB = function () {};

ClassB.prototype.doSomethingLater = function () {
  // util.log(a.property);
}

module.exports = ClassB;