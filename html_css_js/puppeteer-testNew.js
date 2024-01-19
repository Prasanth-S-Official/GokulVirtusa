const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--headless',
      '--disable-gpu',
      '--remote-debugging-port=9222',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();
  try {
    await page.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/login.html');
    await page.setViewport({
      width: 1200,
      height: 1200,
    });

    // Use Puppeteer to evaluate the media query
    const isMediaQueryUsed = await page.evaluate(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      return mediaQuery.matches;
    });

    const expectedMediaQueryUsage = true; // Adjust this based on your expectations

    if (isMediaQueryUsed === expectedMediaQueryUsage) {
      console.log('TESTCASE:testcase_for_media_query:success');
    } else {
      console.log('TESTCASE:testcase_for_media_query:failure');
    }
  } catch (e) {
    console.log("e",e);
    console.log('TESTCASE:testcase_for_media_query:failure');
  } finally {
    await page.close();
    await browser.close();
  }
})();
