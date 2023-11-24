const puppeteer = require('puppeteer'); //import library

async function startBrowser(){  //declare fun async means to be run concurrent 
	let browser; // declare var
	try {
	    console.log("Opening the browser......"); //print
	    browser = await puppeteer.launch({
	        headless: false,
	        args: ["--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true
	    });
	} catch (err) {
	    console.log("Could not create a browser instance => : ", err);
	}
	return browser;
}

module.exports = {
	startBrowser
};