var webdriverio = require('webdriverio');
var options = {
	desiredCapabilities: {
		browserName: 'chrome'
	}
};

console.log('init');

var client = webdriverio
	.remote(options)
	.init();

console.log(client, client.getTitle());

client.url('http://www.google.com')
	.getTitle().then(function(title) {
		console.log('Title was: ' + title);
	})
	.saveScreenshot('./test.jpg')
	.end();

console.log('finish');
