function loadScript(src, callback) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let scriptElement = document.createElement('script');
  scriptElement.src = src;
  scriptElement.onload = callback;
  document.body.append(scriptElement);
}

loadScript('script.js', function () {
  newFunction();
});
