var ClassB = require('./b');

var ClassA = function () {
  this.thing = new ClassB();
  this.property = 5;
}

var a = new ClassA();

module.exports = a;