function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let scriptElement = document.createElement('script');
  scriptElement.src = src;
  document.body.append(scriptElement);
}

loadScript('script.js');

// these runs before script finishes loading
console.log('loading...');
newFunction(); // fails because browser hasn't finished loading the script where the func is declared