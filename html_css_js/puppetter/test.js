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
        console.log('TESTCASE:week2_day1_verify_login_heading_text_presence:success');
      } else {
        console.log('TESTCASE:week2_day1_verify_login_heading_text_presence:failure');
      }
    
        }
    catch(e){
      console.log('TESTCASE:week2_day1_verify_login_heading_text_presence:failure');
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
        console.log('TESTCASE:week2_day1_verify_login_button:success');
      } else {
        console.log('TESTCASE:week2_day1_verify_login_button:failure');
      }
  }
  catch(e){
    console.log('TESTCASE:week2_day1_verify_login_button:failure');
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
        console.log('TESTCASE:week2_day1_verify_no_account_text_presence_in_loginpage:success');
    } else {
        console.log('TESTCASE:week2_day1_verify_no_account_text_presence_in_loginpage:failure');
    }
  }
  catch(e){
    console.log('TESTCASE:week2_day1_verify_no_account_text_presence_in_loginpage:failure');
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
      console.log('TESTCASE:week2_day1_verify_registerpage_heading_text_presence:success');
    } else {
      console.log('TESTCASE:week2_day1_verify_registerpage_heading_text_presence:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week2_day1_verify_registerpage_heading_text_presence:failure');
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
        console.log('TESTCASE:week2_day1_verify_registerpage_form_existence:success');
      } else {
        console.log('TESTCASE:week2_day1_verify_registerpage_form_existence:failure');
      }
  } catch (error) {
    console.log('TESTCASE:week2_day1_verify_registerpage_form_existence:failure');
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
        console.log('TESTCASE:week2_day1_verify_register_button:success');
      } else {
        console.log('TESTCASE:week2_day1_verify_register_button:failure');
      }
  }
  catch(e){
    console.log('TESTCASE:week2_day1_verify_register_button:failure');
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
        console.log('TESTCASE:week2_day2_existence_of_table_in_admin_payment_page:success');
      } else {
        console.log('TESTCASE:week2_day2_existence_of_table_in_admin_payment_page:failure');
      }  } catch (e) {
    console.log('TESTCASE:week2_day2_existence_of_table_in_admin_payment_page:failure');
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
      console.log('TESTCASE:week2_day2_existence_of_th_elements_in_admin_payment_page:success');
    } else {
      console.log('TESTCASE:week2_day2_existence_of_th_elements_in_admin_payment_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week2_day2_existence_of_th_elements_in_admin_payment_page:failure');
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
      console.log('TESTCASE:week2_day2_existence_of_td_elements_in_admin_payment_page:success');
    } else {
      console.log('TESTCASE:week2_day2_existence_of_td_elements_in_admin_payment_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week2_day2_existence_of_td_elements_in_admin_payment_page:failure');
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
    console.log('TESTCASE:week2_day2_existence_of_input_field_in_admin_payment_page:success');
  } else {
    console.log('TESTCASE:week2_day2_existence_of_input_field_in_admin_payment_page:failure');
  }
} catch (e) {
  console.log('TESTCASE:week2_day2_existence_of_input_field_in_admin_payment_page:failure');
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
  await page13.waitForSelector('.flip-card', { timeout: 2000 });
  await page13.waitForSelector('.flip-card-inner', { timeout: 2000 });

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
    console.log('TESTCASE:week2_day3_transition_property_on_hover_in_order_page:success');
  } else {
    console.log('TESTCASE:week2_day3_transition_property_on_hover_in_order_page:failure');
  }
} catch (e) {
  console.log('TESTCASE:week2_day3_transition_property_on_hover_in_order_page:failure');
} finally {
  await page13.close();
}


const page14 = await browser.newPage();
try {
  await page14.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/login.html');
  await page14.setViewport({ width: 100, height: 667 }); // Adjust height as needed

// Wait for the .login element to be present
await page14.waitForSelector('.login');

// Get computed styles of the .login element
const computedStylesMobile = await page14.$eval('.login', (loginElement) => {

 return getComputedStyle(loginElement).fontSize
});

// Set the viewport to emulate a device with a width between 376px and 767px
await page14.setViewport({ width: 1000, height: 800 }); // Adjust width and height as needed

// Get computed styles of the .login element for the second media query
const computedStylesTablet = await page14.$eval('.login', (loginElement) => {
  return  getComputedStyle(loginElement).fontSize
});
if (computedStylesTablet!=computedStylesMobile) {
  console.log('TESTCASE:week2_day4_responsive_design_check_in_login_page:success');
} else {
  console.log('TESTCASE:week2_day4_responsive_design_check_in_login_page:failure');
}
} catch (e) {
  console.log('TESTCASE:week2_day4_responsive_design_check_in_login_page:failure');
} finally {
  await page14.close();
}
// ----------------------------------------
const page15 = await browser.newPage();
try{
  await page15.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/table.html');
  await page15.setViewport({
    width:1200,
    height:1200,
  })
  const headingTexts = await page15.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    return headings.map(h => h.innerText);
  });
  if (headingTexts.some(text => text.includes('Tables'))) {
    console.log('TESTCASE:week2_day5_heading_in_admin_table_page:success');
  } else {
    console.log('TESTCASE:week2_day5_heading_in_admin_table_page:failure');
  }

    }
catch(e){
  console.log('TESTCASE:week2_day5_heading_in_admin_table_page:failure');
}

const page16 = await browser.newPage();
try {
  await page16.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/table.html');
  await page16.setViewport({
    width: 1200,
    height: 800,
  });
  await page16.waitForSelector('img', { timeout: 2000 });

  const tdElements = await page16.$$('img');
  if (tdElements.length > 0) {
    console.log('TESTCASE:week2_day5_table_images_in_admin_table_page:success');
  } else {
    console.log('TESTCASE:week2_day5_table_images_in_admin_table_page:failure');
  }
} catch (e) {
  console.log('TESTCASE:week2_day5_table_images_in_admin_table_page:failure');
} finally {
  await page16.close();
}
const page17 = await browser.newPage();
try{
  await page17.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/user.html');
  await page17.setViewport({
    width:1200,
    height:1200,
  })
  const headingTexts = await page17.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    return headings.map(h => h.innerText);
  });
  if (headingTexts.some(text => text.includes('Users'))) {
    console.log('TESTCASE:week3_day1_heading_in_admin_user_page:success');
  } else {
    console.log('TESTCASE:week3_day1_heading_in_admin_user_page:failure');
  }

    }
catch(e){
  console.log('TESTCASE:week3_day1_heading_in_admin_user_page:failure');
}


const page18 = await browser.newPage();
  try {
    await page18.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/user.html');
    await page18.setViewport({
      width: 1200,
      height: 800,
    });
    await page18.waitForSelector('table', { timeout: 2000 });

    const table = await page18.$('table');
    if (table) {
        console.log('TESTCASE:week3_day1_existence_of_table_in_admin_user_page:success');
      } else {
        console.log('TESTCASE:week3_day1_existence_of_table_in_admin_user_page:failure');
      }  } catch (e) {
    console.log('TESTCASE:week3_day1_existence_of_table_in_admin_user_page:failure');
  } 

  const page19 = await browser.newPage();
  try {
    await page19.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/user.html');
    await page19.setViewport({
      width: 1200,
      height: 800,
    });
    await page19.waitForSelector('th', { timeout: 2000 });

    const thElements = await page19.$$('th');
  
    if (thElements.length > 0) {
      console.log('TESTCASE:week3_day1_existence_of_table_heading_in_admin_user_page:success');
    } else {
      console.log('TESTCASE:week3_day1_existence_of_table_heading_in_admin_user_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week3_day1_existence_of_table_heading_in_admin_user_page:failure');
  } finally {
    await page19.close();
  }
  
  const page20 = await browser.newPage();
  try {
    await page20.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/user.html');
    await page20.setViewport({
      width: 1200,
      height: 800,
    });
    await page20.waitForSelector('td', { timeout: 2000 });

    const tdElements = await page20.$$('td');
  
    if (tdElements.length > 0) {
      console.log('TESTCASE:week3_day1_existence_of_table_data_in_admin_user_page:success');
    } else {
      console.log('TESTCASE:week3_day1_existence_of_table_data_in_admin_user_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week3_day1_existence_of_table_data_in_admin_user_page:failure');
  } finally {
    await page20.close();
  }


  const page22 = await browser.newPage();
  try {
    await page22.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/login.html');
    await page22.setViewport({
      width: 1200,
      height: 800,
    });

    await page22.waitForSelector('#loginButton', { timeout: 2000 });
    await page22.waitForSelector('#error-email', { timeout: 2000 });
    // Attempt to submit the form without entering any data
    await page22.click('#loginButton');

    // Wait for a brief moment to allow for potential validation messages to appear

    // Check if the email and password error messages are displayed
    const emailError = await page22.$eval('#error-email', (el) => el.textContent);

    if (emailError === 'Email is required' ) {
      console.log('TESTCASE:week3_day2_required_validation_for_email_in_login_page:success');
    } else {
      console.log('TESTCASE:week3_day2_required_validation_for_email_in_login_page:failure');
    }

  } catch (e) {
    console.log('TESTCASE:week3_day2_required_validation_for_email_in_login_page:failure');
  } 
  finally {
    await page22.close();
  }
  const page23 = await browser.newPage();
  try {
    await page23.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/login.html');
    await page23.setViewport({
      width: 1200,
      height: 800,
    });

  
    await page23.waitForSelector('#loginButton', { timeout: 2000 });
    await page23.waitForSelector('#error-password', { timeout: 2000 });
    // Attempt to submit the form without entering any data
    await page23.click('#loginButton');

    // Wait for a brief moment to allow for potential validation messages to appear

    // Check if the email and password error messages are displayed
    const passwordError = await page23.$eval('#error-password', (el) => el.textContent);

    if ( passwordError === 'Password is required') {
      console.log('TESTCASE:week3_day2_required_validation_for_password_in_login_page:success');
    } else {
      console.log('TESTCASE:week3_day2_required_validation_for_password_in_login_page:failure');
    }

  } catch (e) {
    console.log('TESTCASE:week3_day2_required_validation_for_password_in_login_page:failure',e);
  } 
  finally {
    await page23.close();
  }
  const page24 = await browser.newPage();
try{
  await page24.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/payment.html');
  await page24.setViewport({
    width:1200,
    height:1200,
  })
  const headingTexts = await page24.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    return headings.map(h => h.innerText);
  });
  if (headingTexts.some(text => text.includes('Choose your payment method'))) {
    console.log('TESTCASE:week3_day3_heading_in_user_payment_page:success');
  } else {
    console.log('TESTCASE:week3_day3_heading_in_user_payment_page:failure');
  }

    }
catch(e){
  console.log('TESTCASE:week3_day3_heading_in_user_payment_page:failure');
}

const page25 = await browser.newPage();
try {
  await page25.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/selectTable.html');
  await page25.setViewport({
    width: 1200,
    height: 800,
  });
  await page25.waitForSelector('img', { timeout: 2000 });

  const tdElements = await page25.$$('img');
  if (tdElements.length > 0) {
    console.log('TESTCASE:week3_day4_avatar_image_in_select_table_page:success');
  } else {
    console.log('TESTCASE:week3_day4_avatar_image_in_select_table_page:failure');
  }
} catch (e) {
  console.log('TESTCASE:week3_day4_avatar_image_in_select_table_page:failure');
} finally {
  await page25.close();
}


const page26 = await browser.newPage();
try{
  await page26.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/menu.html');
  await page26.setViewport({
    width:1200,
    height:1200,
  })
  const headingTexts = await page26.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    return headings.map(h => h.innerText);
  });
  if (headingTexts.some(text => text.includes('Menu Items'))) {
    console.log('TESTCASE:week3_day5_heading_in_admin_menu_page:success');
  } else {
    console.log('TESTCASE:week3_day5_heading_in_admin_menu_page:failure');
  }

    }
catch(e){
  console.log('TESTCASE:week3_day5_heading_in_admin_menu_page:failure');
}


const page27 = await browser.newPage();
  try {
    await page27.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/menu.html');
    await page27.setViewport({
      width: 1200,
      height: 800,
    });
    await page27.waitForSelector('table', { timeout: 2000 });

    const table = await page27.$('table');
    if (table) {
        console.log('TESTCASE:week3_day5_existence_of_table_in_admin_menu_page:success');
      } else {
        console.log('TESTCASE:week3_day5_existence_of_table_in_admin_menu_page:failure');
      }  } catch (e) {
    console.log('TESTCASE:week3_day5_existence_of_table_in_admin_menu_page:failure');
  } 

  const page28 = await browser.newPage();
  try {
    await page28.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/menu.html');
    await page28.setViewport({
      width: 1200,
      height: 800,
    });
    await page28.waitForSelector('th', { timeout: 2000 });

    const thElements = await page28.$$('th');
  
    if (thElements.length > 0) {
      console.log('TESTCASE:week3_day5_existence_of_table_heading_in_admin_menu_page:success');
    } else {
      console.log('TESTCASE:week3_day5_existence_of_table_heading_in_admin_menu_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week3_day5_existence_of_table_heading_in_admin_menu_page:failure');
  } finally {
    await page28.close();
  }
  
  const page29 = await browser.newPage();
  try {
    await page29.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/admin/menu.html');
    await page29.setViewport({
      width: 1200,
      height: 800,
    });
    await page29.waitForSelector('td', { timeout: 2000 });

    const tdElements = await page29.$$('td');
  
    if (tdElements.length > 0) {
      console.log('TESTCASE:week3_day5_existence_of_table_data_in_admin_menu_page:success');
    } else {
      console.log('TESTCASE:week3_day5_existence_of_table_data_in_admin_menu_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week3_day5_existence_of_table_data_in_admin_menu_page:failure');
  } finally {
    await page29.close();
  }


  const page30 = await browser.newPage();
  try {
    await page30.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/payment.html');
    await page30.setViewport({
      width: 1200,
      height: 800,
    });
    await page30.waitForSelector('#checkout-button', { timeout: 2000 });

    const checkoutButton = await page30.$('#checkout-button');
    if (checkoutButton) {
      await checkoutButton.click();


 const headingTexts = await page30.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    return headings.map(h => h.innerText);
  });

  if (headingTexts.some(text => text.includes('Please Provide Feedback'))) {
    console.log('TESTCASE:week4_day1_feedback_model_exists_in_payment_page:success');
  } else {
    console.log('TESTCASE:week4_day1_feedback_model_exists_in_payment_page:failure');
  }
    } else {
      console.log('TESTCASE:week4_day1_feedback_model_exists_in_payment_page:failure');
    }
  } catch (e) {
    console.log('TESTCASE:week4_day1_feedback_model_exists_in_payment_page:failure');
  } finally {
    await page30.close();
  }
  const page31 = await browser.newPage();
try{
  await page31.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/forgotPassword.html');
  await page31.setViewport({
    width:1200,
    height:1200,
  })
  const headingTexts = await page31.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    return headings.map(h => h.innerText);
  });
  if (headingTexts.some(text => text.includes('Forgot Password'))) {
    console.log('TESTCASE:week4_day2_heading_in_forgot_password_page:success');
  } else {
    console.log('TESTCASE:week4_day2_heading_in_forgot_password_page:failure');
  }

    }
catch(e){
  console.log('TESTCASE:week4_day2_heading_in_forgot_password_page:failure');
}

const page32 = await browser.newPage();
try {
  await page32.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/forgotPassword.html'); // Replace with the actual path or URL
  await page32.setViewport({
    width: 1200,
    height: 1200,
  });

  const labels = await page32.$$eval('label', labels => labels.map(label => label.innerText));
  const isEmailLabelPresent = labels.some(label => label.toLowerCase().includes('email'));

  if (isEmailLabelPresent) {
    console.log('TESTCASE:week4_day2_email_field_in_forgot_password_page:success');
  } else {
    console.log('TESTCASE:week4_day2_email_field_in_forgot_password_page:failure');
  }
} catch (e) {
  console.log('TESTCASE:week4_day2_email_field_in_forgot_password_page:failure');
} finally {
  await page32.close();
}

// Test Case for Page 33 - Check all labels for "New Password"
const page33 = await browser.newPage();
try {
  await page33.goto('https://8081-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io/forgotPassword.html'); // Replace with the actual path or URL
  await page33.setViewport({
    width: 1200,
    height: 1200,
  });

  const labels = await page33.$$eval('label', labels => labels.map(label => label.innerText));
  const isNewPasswordLabelPresent = labels.some(label => label.toLowerCase()=='new password');

  if (isNewPasswordLabelPresent) {
    console.log('TESTCASE:week4_day2_new_password_field_in_forgot_password_page:success');
  } else {
    console.log('TESTCASE:week4_day2_new_password_field_in_forgot_password_page:failure');
  }
} catch (e) {
  console.log('TESTCASE:week4_day2_new_password_field_in_forgot_password_page:failure');
} finally {
  await page33.close();
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