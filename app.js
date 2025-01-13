function loadScript(src, callback) {
	// creates a <script> tag and append it to the page
	// this causes the script with given src to start loading and run when complete
	let scriptElement = document.createElement('script');
	scriptElement.src = src;
	scriptElement.onload = function () {
		callback(null, scriptElement);
	};

	scriptElement.onerror = function () {
		callback(new Error(`Script load error for source: ${src}`));
	};

	document.body.append(scriptElement);
}

// make use of error-first callback pattern to handle asynchronous operations
loadScript('script.js', function (err, script) {
	if (err) {
    console.log(err.message);
	} else {
    console.log(`Script source: ${script.src} loaded successfully.`);
		newFunction();
	}
});

// trigger error scenario
loadScript('scripts.js', function (err, script) {
	if (err) {
    console.log(err.message);
	} else {
    console.log(`Script source: ${script.src} loaded successfully.`);
		newFunction();
	}
});
