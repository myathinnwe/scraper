const scraperObject = {
	url: 'https://mylotto.co.nz/results/bullseye',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		// Wait for the required DOM to be rendered
		//await page.waitForSelector('.page_inner');
		await page.waitForSelector('#bullseye-results');
		// Get the link to all the required books
		//let urls = await page.$$eval('section ol > li', links => {
			// Make sure the book to be scraped is in stock
			//links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
			// Extract the links from the data
			//links = links.map(el => el.querySelector('h3 > a').title)
			//links = links.map(el => el.querySelector('div > p').textContent)
			//links = links.map(el => el.querySelector('h3 > a').title +":"+ el.querySelector('div > p').textContent)
			//return links;
		//});
		//console.log(urls);
		let result = await page.evaluate(() =>{
			let result_amt = document.querySelector("#bullseye-results > div.lnz-bullseye-draw-result > div.lnz-bullseye-draw-result__viewer > div.lnz-bullseye-draw-result__winning-number").textContent;
			let result_day = document.querySelector("#result-date-selector > option:nth-child(1)").textContent;
			const myArray = result_day.split(" ");
			let serial_no = myArray[0];
			let result_date = myArray.slice(1).join(" ");

			return serial_no +","+result_date+","+result_amt;
		});

		console.log(result);
	}
}

module.exports = scraperObject;