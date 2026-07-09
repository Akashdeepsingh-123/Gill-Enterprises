const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  async function downloadFirstImage(query, filename) {
    console.log('Searching for ' + query);
    await page.goto('https://duckduckgo.com/?q=' + encodeURIComponent(query) + '&t=h_&iar=images&iax=images&ia=images');
    await page.waitForSelector('.tile--img__img');
    const imgUrl = await page.evaluate(() => {
      return document.querySelector('.tile--img__img').src;
    });
    console.log('Found URL:', imgUrl);
    
    // DuckDuckGo serves image proxy URLs, fetch it
    const viewSource = await page.goto(imgUrl);
    const buffer = await viewSource.buffer();
    fs.writeFileSync(filename, buffer);
    console.log('Saved', filename);
  }

  await downloadFirstImage('DTDC transparent logo png', 'public/dtdc-logo.png');
  await downloadFirstImage('Blue Dart transparent logo png', 'public/bluedart-logo.png');

  await browser.close();
})();
