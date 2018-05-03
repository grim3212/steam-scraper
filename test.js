const scraper = require('./scraper.js');

scraper.getData(440, (err, data) => {
	console.log(data);
});