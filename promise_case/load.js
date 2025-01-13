function loadScript(src) {
	return new Promise(function (resolve, reject) {
		// creates a <script> tag and append it to the page
		// this causes the script with given src to start loading and run when complete
		let scriptElement = document.createElement('script');
		scriptElement.src = src;
		scriptElement.onload = function () {
			resolve(scriptElement);
		};

		scriptElement.onerror = function () {
			reject(new Error(`Script load error for source: ${src}`));
		};

		document.body.append(scriptElement);
	});
}

// make use of error-first callback pattern to handle asynchronous operations
loadScript('script.js')
.then(function (script) {
	console.log(`Script source: ${script.src} loaded successfully.`);
	newFunction();
});

// trigger error scenario
loadScript('scripts.js')
.catch(function (error) {
	console.log(error.message);
});
