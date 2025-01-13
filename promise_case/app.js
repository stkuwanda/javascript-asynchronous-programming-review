const promise = new Promise(executor);

// producing code goes inside the executor function body
// resolve and reject parameters will be passed callback arguments by
// JavaScript itself.
// The executor runs automatically when the constructor function Promise is called
function executor(resolve, reject) {
	//Do work...
	const value = 2 + 2; // our executor code

	if (value) {
		// when executor job gets the result successfully the resolve callback is called
		// with the value as argument
		resolve(value);
	} else {
		// if an error occurred instead, the reject callback is called with an error object
		// as the argument
		reject(new Error('Work failed!'));
	}
}

// internal properties of the promise project (internal in the sense that they can't be accessed directly):
// state: 'pending', 'fulfilled', or 'rejected'
// result: 'undefined', value (from resolve callback), or error (from reject callback)
promise;

let promise2 = new Promise(function (resolve, reject) {
	// the function is executed automatically when the promise is constructed
	// after 1 second signal the job is done with the result "complete"
	setTimeout(() => resolve('complete'), 1000);
});

// arrow syntax used just for fun
// demo a rejection scenario
let promise3 = new Promise((_, reject) =>
	reject(new Error('Operation failed!'))
);

let promise4 = new Promise(function (_, reject) {
	reject(new Error('Operation failed!'));
});

// consumer functions receive and use the result of the settled Promise
function consumer(value) {
	console.log(value);
}

// error handlers are functions that receive the error result of the settled Promise
function errorHandler(error) {
	console.log(error.message);
}

// then method is called on the Promise object with the consumer function callback
// and errorHandler callback as arguments
promise2.then(consumer, errorHandler);

// consumer only scenario
promise2.then(consumer);

// errorHandler only scenarios
promise3.then(null, errorHandler);
promise4.catch(errorHandler); // short hand version of the above

// finally method can be called on the promise to run cleanup code
// finally handle accepts no arguments and settled value or settled error
// is not touchable inside finally and will pass through right to the next
// chained then method
promise3.finally(() => console.log('running cleanup code...'));
