var webdriverio = require('webdriverio');
var options = {
	desiredCapabilities: {
		browserName: 'firefox'
	}
};

console.log('init');

webdriverio
	.remote(options)
	.init()
	.url('http://www.google.com')
	.getTitle().then(function(title) {
		console.log('Title was: ' + title);
	})
	.saveScreenshot('./test.jpg')
	.end();

console.log('finish');