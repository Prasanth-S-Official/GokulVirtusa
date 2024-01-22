const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:8081/login.html');
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


    
    const page1 = await browser.newPage();
    try{
      await page1.goto('http://localhost:8081/login.html');
      await page1.setViewport({
        width:1200,
        height:800,
      })

      const emailInput = await page1.evaluate(() => {
        const emailField = document.querySelector('input[placeholder="example@gmail.com"]');
        return emailField ? true : false;
     });

     const passwordInput = await page1.evaluate(() => {
        const passwordField = document.querySelector('input[placeholder="********"]');
        return passwordField ? true : false;
        });

        if (emailInput && passwordInput) {
            console.log('TESTCASE:week1_day1_verify_login_email_password_input_with_text:success');
        } else {
            console.log('TESTCASE:week1_day1_verify_login_email_password_input_with_text:failure');
        }

    }
    catch(e){
      console.log('TESTCASE:week1_day1_verify_login_email_password_input_with_text:failure');
    }

    
  const page2 = await browser.newPage();
  try{
    await page2.goto('http://localhost:8081/login.html');
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
    await page3.goto('http://localhost:8081/login.html');
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
    await page4.goto('http://localhost:8081/register.html'); // Replace with the actual URL of your HTML page
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

  const page5 = await browser.newPage();

  try {
    await page5.goto('http://localhost:8081/register.html'); // Replace with the actual URL of your HTML page
    await page5.setViewport({
      width: 1200,
      height: 800,
    });

  
    const labels = await page5.evaluate(() => {
        const labels = Array.from(document.querySelectorAll('label'));
        return labels.map(label => label.innerText);
      });
    
      const expectedLabels = ['Full Name *', 'Email *', 'Phone Number *', 'Password *', 'Role *'];
    
      const allLabelsPresent = expectedLabels.every(expectedLabel => labels.includes(expectedLabel));
    
      if (allLabelsPresent) {
        console.log('TESTCASE:week1_day1_verify_registerpage_labels_and_texts:success');
      } else {
        console.log('TESTCASE:week1_day1_verify_registerpage_labels_and_texts:failure');
      }
  } catch (e) {
    console.log('TESTCASE:week1_day1_verify_registerpage_labels_and_texts:failure');
  }



  const page6 = await browser.newPage();
  
  try {
    await page6.goto('http://localhost:8081/register.html'); // Replace with the actual URL of your HTML page
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

  const page7 = await browser.newPage();
  
  try {
    await page7.goto('http://localhost:8081/register.html'); // Replace with the actual URL of your HTML page
    await page7.setViewport({
      width: 1200,
      height: 800,
    });

    const inputFields = await page7.evaluate(() => {
        const inputs = Array.from(document.querySelectorAll('input'));
        return inputs.map(input => input.placeholder);
      });
    
      const expectedInputs = ['Name', 'example@gmail.com', '9654645671', '********'];
    
      const allInputsPresent = expectedInputs.every(expectedInput => inputFields.includes(expectedInput));
    
      if (allInputsPresent) {
        console.log('TESTCASE:week1_day1_verify_registerpage_input_fields_existence:success');
      } else {
        console.log('TESTCASE:week1_day1_verify_registerpage_input_fields_existence:failure');
      }
  } catch (error) {
    console.log('TESTCASE:week1_day1_verify_registerpage_input_fields_existence:failure');
  }


  const page8 = await browser.newPage();
  try{
    await page8.goto('http://localhost:8081/register.html');
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
  



  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page6.close();
    await page7.close();
    await page8.close();
    await browser.close();
  }
})();