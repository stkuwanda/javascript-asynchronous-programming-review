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
