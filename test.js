const scraper = require('./scraper.js');

scraper.getData(219540, (err, data) => {
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});