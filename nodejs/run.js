// let EventEmitter = require('events');

// let event = new EventEmitter();

// event.on('event1', function() {
//   console.log('Event1 fired!');
//   setTimeout(function () {
//     event.emit('event2');
//   }, 1000);
// });

// event.on('event2', function() {
//   console.log('Event2 fired!');
//   setTimeout(function () {
//     event.emit('event1');
//   }, 1000);
// });

// event.on('event3', function() {
//   console.log('Event3 fired!');
//   setTimeout(function () {
//     event.emit('event1');
//   }, 1000);
// });

// event.emit('event3'); // just for testing output

//------------

var events = require('events');
var Logger = new events.EventEmitter();

Logger.writelog = message => {
  console.log(message);
  Logger.emit('error', 'Error occured');
}

module.exports = Logger;