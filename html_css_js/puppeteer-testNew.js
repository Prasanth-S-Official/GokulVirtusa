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
    await page.setViewport({ width: 100, height: 667 }); // Adjust height as needed

  // Wait for the .login element to be present
  await page.waitForSelector('.login');

  // Get computed styles of the .login element
  const computedStylesMobile = await page.$eval('.login', (loginElement) => {
 
   return getComputedStyle(loginElement).fontSize
  });

  // Set the viewport to emulate a device with a width between 376px and 767px
  await page.setViewport({ width: 1000, height: 800 }); // Adjust width and height as needed

  // Get computed styles of the .login element for the second media query
  const computedStylesTablet = await page.$eval('.login', (loginElement) => {
    return  getComputedStyle(loginElement).fontSize
  });

  console.log("computedStylesMobile",computedStylesMobile,"computedStylesTablet",computedStylesTablet);
  } catch (e) {
    console.log("e",e);
    console.log('TESTCASE:testcase_for_media_query:failure');
  } finally {
    await page.close();
    await browser.close();
  }
})();
