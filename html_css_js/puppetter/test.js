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
  

  // -------------------------------------------------------------------------------
  const page9 = await browser.newPage();
  try {
    await page9.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/payment.html');
    await page9.setViewport({
      width: 1200,
      height: 800,
    });
    await page9.waitForSelector('table', { timeout: 2000 });

    const table = await page9.$('table');
    if (table) {
        console.log('TESTCASE:week1_day2_existence_of_table_in_admin_payment_page:success');
      } else {
        console.log('TESTCASE:week1_day2_existence_of_table_in_admin_payment_page:failure');
      }  } catch (e) {
    console.log('TESTCASE:week1_day2_existence_of_table_in_admin_payment_page:failure');
  } 

  const page10 = await browser.newPage();
  try {
    await page10.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/payment.html');
    await page10.setViewport({
      width: 1200,
      height: 800,
    });
    await page10.waitForSelector('th', { timeout: 2000 });

    const thElements = await page10.$$('th');
  
    if (thElements.length > 0) {
      console.log('TESTCASE:week1_day2_existence_of_th_elements_in_admin_payment_page:success');
    } else {
      console.log('TESTCASE:week1_day2_existence_of_th_elements_in_admin_payment_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week1_day2_existence_of_th_elements_in_admin_payment_page:failure');
  } finally {
    await page10.close();
  }
  
  const page11 = await browser.newPage();
  try {
    await page11.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/payment.html');
    await page11.setViewport({
      width: 1200,
      height: 800,
    });
    await page11.waitForSelector('td', { timeout: 2000 });

    const tdElements = await page11.$$('td');
  
    if (tdElements.length > 0) {
      console.log('TESTCASE:week1_day2_existence_of_td_elements_in_admin_payment_page:success');
    } else {
      console.log('TESTCASE:week1_day2_existence_of_td_elements_in_admin_payment_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week1_day2_existence_of_td_elements_in_admin_payment_page:failure');
  } finally {
    await page11.close();
  }
  const page12 = await browser.newPage();
try {
  await page12.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/payment.html');
  await page12.setViewport({
    width: 1200,
    height: 800,
  });
  await page12.waitForSelector('input[type="text"]', { timeout: 2000 });

  const inputField = await page12.$('input[type="text"]');

  if (inputField) {
    console.log('TESTCASE:week1_day2_existence_of_input_field_in_admin_payment_page:success');
  } else {
    console.log('TESTCASE:week1_day2_existence_of_input_field_in_admin_payment_page:failure');
  }
} catch (e) {
  console.log('TESTCASE:week1_day2_existence_of_input_field_in_admin_payment_page:failure');
} finally {
  await page12.close();
}
// ---------------------------------
const page13 = await browser.newPage();
try {
  await page13.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/order.html');
  await page13.setViewport({
    width: 1200,
    height: 800,
  });
  await page13.waitForSelector('.flip-card');

  // Get the initial transformation matrix before hover
  const initialTransform = await page13.$eval('.flip-card-inner', cardInner => {
    const style = window.getComputedStyle(cardInner);
    return style.getPropertyValue('transform');
  });

  // Simulate hover by triggering the hover style
  await page13.hover('.flip-card');

  // Get the transformation matrix after hover
  const transformed = await page13.$eval('.flip-card-inner', cardInner => {
    const style = window.getComputedStyle(cardInner);
    return style.getPropertyValue('transform');
  });

  if (transformed!=initialTransform) {
    console.log('TESTCASE:week1_day3_transition_property_on_hover_in_order_page:success');
  } else {
    console.log('TESTCASE:week1_day3_transition_property_on_hover_in_order_page:failure');
  }
} catch (e) {
  console.log('TESTCASE:week1_day3_transition_property_on_hover_in_order_page:failure');
} finally {
  await page13.close();
}
await browser.close();



//   finally{
//     await page.close();
//     await page2.close();
//     await page3.close();
//     await page4.close();
//     await page6.close();
//     await page8.close();
//     await page9.close();
//     await browser.close();
//   }
})();