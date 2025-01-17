const promise1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('Operation completed in half a second.');
	}, 500);
});

const promise2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('Operation completed in a second.');
	}, 1000);
});

const promise3 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('Operation completed in 2 seconds.');
	}, 2000);
});

const promise4 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject('Error occurred in half a second.');
	}, 500);
});

const promise5 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('Operation completed in a second.');
	}, 1000);
});

const promise6 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('Operation completed in 2 seconds.');
	}, 2000);
});

const promises = [promise1, promise2, promise3];
const promises2 = [promise4, promise5, promise6];

// Promise.all
Promise.all(promises)
.then(function (value) {
  console.log(value);
});

// settles and returns a collection of resolved values only when all promises in the collection 
// are fulfilled and not rejected, otherwise throws an error
Promise.all(promises2)
.catch(function (error) {
  console.log('One or more promises failed in the collection promises2.');
});

// settles and returns an array of objects only when all promises in the collection are 
// settled(whether fulfilled or rejected), otherwise throws error
Promise.allSettled(promises2)
.then(function (value) {
  console.log(value);
});

// returns first value to settle by fulfilling, and ignores any subsequent settlements.
// returns error if no resolved settlements occur from the processed collection of promises
Promise.any(promises2)
.then(function (value) {
  console.log(value);
});


