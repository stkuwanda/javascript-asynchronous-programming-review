var Logger = require('./run');

for(var i = 0; i < 11; i++) {
  Logger.on('error', function (error) {
    console.log('error writing log: ' + error);
  });
  
  Logger.writelog('Hello');
}

// The code has a memory leak. The solution is to use emitter setMaxListener(100)
// to increase the limit of event listeners