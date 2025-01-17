// demoes reading a directory and deleting the contents using promisified native NodeJs APIs
const fs = require('fs').promises;
const path = require('path');

const directory = path.join('promise_case', 'test'); // 'promise_case\\test';
fs.readdir(directory).then(console.log);

async function deleteFiles() {
	let files = await fs.readdir(directory);
  console.log('for deletion:', files);

	for (const file of files) {
		await fs.unlink(path.join(directory, file));
	}
}

deleteFiles();
