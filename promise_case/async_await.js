// creating promises using async keyword in function declaration.
// note that the async functions below demonstrate a settled fulfilled context
// this means calling the functions will return settled Promises which are in a fulfilled state
async function hello() {
	return 'A message';
}

async function act() {}

const sing = async function () {
	return 'Sing';
};

// returns a fulfilled Promise effectively behaving like Promise.resolve('A message');
// hello();
// sing();
// act();

// async funcs in the context of settled rejected Promises
async function run() {
	throw 'An error happened!';
}

async function test() {
	throw new Error('Something has gone wrong!');
}

// returns a rejected Promise effectively behaving like Promise.reject('Rejection message');
// run();
// test();

async function login(username, password) {
	if (!username || !password) throw 'Missing credentials!';
	if (password === 'password!') return 'Access granted!';
	throw new Error('Type in password!');
}

login('simba', 'password!')
	.then(function (result) {
		console.log(result);
	})
	.catch((err) => {
		console.log(err.message);
	});

// Sequential processing of a collection of Promises using for await of loop
function delay(ms) {
	return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

const createDelays = [1000, 2000, 500, 3000, 5000, 10000, 100].map((ms) =>
	delay(ms)
); // array of Promises

async function processDelays() {
	// old method of sequential processing of an asynchronous iterable (iterable of asynchronous object aka Promises)
	// for (const delayTime of createDelays) {
	// 	const value = await delayTime;
	// 	console.log(`Waited for ${value} milliseconds.`);
	// }

	// new syntax of sequential processing of an asynchronous iterable (iterable of asynchronous object aka Promises)
	for await (const delayTime of createDelays) {
		console.log(`Waited for ${delayTime} milliseconds.`);
	}

	console.log('All delays have been processed.');
}

processDelays();
