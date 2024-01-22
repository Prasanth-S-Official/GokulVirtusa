const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    try{
      await page.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/login.html');
      await page.setViewport({
        width:1200,
        height:1200,
      })
      const headingTexts = await page.evaluate(() => {
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        return headings.map(h => h.innerText);
      });
    
      if (headingTexts.some(text => text.includes('Login to Your Account'))) {
        console.log('TESTCASE:week1_day1_verify_login_heading_text_presence:success');
      } else {
        console.log('TESTCASE:week1_day1_verify_login_heading_text_presence:failure');
      }
    
        }
    catch(e){
      console.log('TESTCASE:week1_day1_verify_login_heading_text_presence:failure');
    }


    
  

    
  const page2 = await browser.newPage();
  try{
    await page2.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/login.html');
    await page2.setViewport({
      width:1200,
      height:800,
    })
    const loginButton = await page2.evaluate(() => {
        const button = document.querySelector('button');
        return button && button.innerText === 'Login' ? true : false;
      });
    
      if (loginButton) {
        console.log('TESTCASE:week1_day1_verify_login_button:success');
      } else {
        console.log('TESTCASE:week1_day1_verify_login_button:failure');
      }
  }
  catch(e){
    console.log('TESTCASE:week1_day1_verify_login_button:failure');
  }

  const page3 = await browser.newPage();
  try{
    await page3.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/login.html');
    await page3.setViewport({
      width:1200,
      height:800,
    })
  const bodyText = await page3.evaluate(() => document.body.innerText);

    if (bodyText.includes("Don't have an account?")) {
        console.log('TESTCASE:week1_day1_verify_no_account_text_presence_in_loginpage:success');
    } else {
        console.log('TESTCASE:week1_day1_verify_no_account_text_presence_in_loginpage:failure');
    }
  }
  catch(e){
    console.log('TESTCASE:week1_day1_verify_no_account_text_presence_in_loginpage:failure');
  }

  const page4 = await browser.newPage();

  try {
    await page4.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/register.html'); // Replace with the actual URL of your HTML page
    await page4.setViewport({
      width: 1200,
      height: 800,
    });

    // Check if the script.js file is loaded
    const bodyText = await page4.evaluate(() => document.body.innerText);

    if (bodyText.includes('Create Account')) {
      console.log('TESTCASE:week1_day1_verify_registerpage_heading_text_presence:success');
    } else {
      console.log('TESTCASE:week1_day1_verify_registerpage_heading_text_presence:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week1_day1_verify_registerpage_heading_text_presence:failure');
  }





  const page6 = await browser.newPage();
  
  try {
    await page6.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/register.html'); // Replace with the actual URL of your HTML page
    await page6.setViewport({
      width: 1200,
      height: 800,
    });

    const formExists = await page6.evaluate(() => {
        const form = document.querySelector('form');
        return form ? true : false;
      });
    
      if (formExists) {
        console.log('TESTCASE:week1_day1_verify_registerpage_form_existence:success');
      } else {
        console.log('TESTCASE:week1_day1_verify_registerpage_form_existence:failure');
      }
  } catch (error) {
    console.log('TESTCASE:week1_day1_verify_registerpage_form_existence:failure');
  }

 


  const page8 = await browser.newPage();
  try{
    await page8.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/register.html');
    await page8.setViewport({
      width:1200,
      height:800,
    })
    const loginButton = await page8.evaluate(() => {
        const button = document.querySelector('button');
        return button && button.innerText === 'Register' ? true : false;
      });
    
      if (loginButton) {
        console.log('TESTCASE:week1_day1_verify_register_button:success');
      } else {
        console.log('TESTCASE:week1_day1_verify_register_button:failure');
      }
  }
  catch(e){
    console.log('TESTCASE:week1_day1_verify_register_button:failure');
  }
  
  const page9 = await browser.newPage();
  try {
    await page9.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/register.html');
    await page9.setViewport({
      width: 1200,
      height: 800,
    });

    const table = await page9.$('table');
    console.log("table",table);
    if (table) {
        console.log('TESTCASE:week1_day2_existence_of_table:success');
      } else {
        console.log('TESTCASE:week1_day2_existence_of_table:failure');
      }  } catch (e) {
    console.log('TESTCASE:week1_day2_existence_of_table:failure');
  } 





  finally{
    await page.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page6.close();
    await page8.close();
    await page9.close();
    await browser.close();
  }
})();