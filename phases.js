const fs = require('fs');

console.log('Start');

fs.readFile(__dirname + '/README.md', 'utf8', function (err, data) {
	console.log('callback scheduled with an I/O operation');
	console.log(data);
});

Promise.resolve('resolved').then(() => {
	console.log('callback scheduled with promise microtask 1');
});

process.nextTick(() => {
	console.log('Callback scheduled with process.nextTick #1');
});

setTimeout(() => {
	console.log('setTimeout #1 callback');
}, 0);

process.nextTick(() => {
	console.log('Callback scheduled with process.nextTick #2');
});

Promise.resolve('resolved').then(() => {
	console.log('callback scheduled with promise microtask 2');
});

setImmediate(() => {
	console.log('callback scheduled with setImmediate');
});

console.log('End');
