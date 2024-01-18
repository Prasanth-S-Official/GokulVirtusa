const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
 
  const page = await browser.newPage();
  try {
    await page.goto('https://api.example.com/'); // Replace with your actual URL
    await page.waitForSelector('#column1', { timeout: 2000 }); // Wait for the element to appear
    const column1Content = await page.$eval('#column1', (element) => element.textContent.trim());
 
    if (column1Content === 'Column 1') {
      console.log('TESTCASE:week2_day1_content:success');
    } else {
      console.log('TESTCASE:column1_content:failure');
    }
  } catch (error) {
    console.log('TESTCASE:column1_content:failure');
  }
 
  const page2 = await browser.newPage();
  try {
    await page2.goto('https://api.example.com/'); // Replace with your actual URL
    await page2.waitForSelector('#column2', { timeout: 2000 }); // Wait for the element to appear
    const column2Content = await page2.$eval('#column2', (element) => element.textContent.trim());
 
    if (column2Content === 'Column 2') {
      console.log('TESTCASE:column2_content:success');
    } else {
      console.log('TESTCASE:column2_content:failure');
    }
  } catch (error) {
    console.log('TESTCASE:column2_content:failure');
  }
 
  const page3 = await browser.newPage();
  try {
    await page3.goto('https://api.example.com/');
    await page3.waitForSelector('form', { timeout: 2000 }); // Wait for form element
    const formContent = await page3.$eval('form', (form) => {
      return form.innerHTML.trim();
    });
 
    if (formContent) {
      console.log('TESTCASE:form_element_exists:success');
    } else {
      console.log('TESTCASE:form_element_exists:failure');
    }
  } catch (error) {
    console.log('TESTCASE:form_element_exists:failure');
  }
 
  const page4 = await browser.newPage();
  try {
    await page4.goto('https://api.example.com/');
    await page4.waitForSelector('form', { timeout: 2000 }); // Wait for form element
    const fieldLabels = await page4.$$eval('form label', (labels) => {
      return labels.map(label => label.textContent.trim());
    });
 
    const expectedLabels = ['Name:', 'Email:', 'Message:'];
 
    if (
      fieldLabels.length === expectedLabels.length &&
      expectedLabels.every((label, index) => fieldLabels[index] === label)
    ) {
      console.log('TESTCASE:field_labels_exist_with_exact_contents:success');
    } else {
      console.log('TESTCASE:field_labels_exist_with_exact_contents:failure');
    }
  } catch (error) {
    console.log('TESTCASE:field_labels_exist_with_exact_contents:failure');
  }
 
  const page5 = await browser.newPage();
  try {
    await page5.goto('https://api.example.com/');
    await page5.waitForSelector('form #submit-button', { timeout: 2000 }); // Wait for submit button
    const submitButtonText = await page5.$eval('form #submit-button', (button) => {
      return button.value;
    });
 
    if (submitButtonText) {
      console.log('TESTCASE:submit_button_exists:success');
    } else {
      console.log('TESTCASE:submit_button_exists:failure');
    }
  } catch (error) {
    console.log('TESTCASE:submit_button_exists:failure');
  }
 
  const page6 = await browser.newPage();
  try {
    await page6.goto('https://api.example.com/');
    await page6.waitForSelector('table tr th', { timeout: 2000 }); // Wait for table header row
    const headerRowContent = await page6.$eval('table tr th', (headerRow) => {
      return headerRow.innerHTML.trim();
    });
 
    if (headerRowContent) {
      console.log('TESTCASE:table_header_row_exists:success');
    } else {
      console.log('TESTCASE:table_header_row_exists:failure');
    }
  } catch (error) {
    console.log('TESTCASE:table_header_row_exists:failure');
  }
 
  const page7 = await browser.newPage();
  try {
    await page7.goto('https://api.example.com/');
    await page7.waitForSelector('table tr td', { timeout: 2000 }); // Wait for table data rows
    const dataRowContent = await page7.$eval('table tr td', (dataRow) => {
      return dataRow.innerHTML.trim();
    });
 
    if (dataRowContent) {
      console.log('TESTCASE:table_data_rows_exist:success');
    } else {
      console.log('TESTCASE:table_data_rows_exist:failure');
    }
  } catch (error) {
    console.log('TESTCASE:table_data_rows_exist:failure');
  }
 
  const page8 = await browser.newPage();
  try {
    await page8.goto('https://api.example.com/');
    await page8.waitForSelector('table tr th', { timeout: 2000 }); // Wait for table header row
    const firstHeaderRowContent = await page8.$$eval('table tr th', (headerRowList) => {
      return headerRowList.map(headerRow => headerRow.textContent.trim());
    });
 
    const expectedHeaderRowContent = ['Name', 'Age', 'Place']; // Replace with your expected header row content
 
    if (
      firstHeaderRowContent.length === expectedHeaderRowContent.length &&
      firstHeaderRowContent.every((content, index) => content === expectedHeaderRowContent[index])
    ) {
      console.log('TESTCASE:first_table_header_row_content:success');
    } else {
      console.log('TESTCASE:first_table_header_row_content:failure');
    }
  } catch (error) {
    console.log('TESTCASE:first_table_header_row_content:failure');
  }
 
  const page9 = await browser.newPage();
  try {
    await page9.goto('https://api.example.com/');
    await page9.waitForSelector('table tr td', { timeout: 2000 }); // Wait for table data rows
    const firstDataRowContent = await page9.$$eval('table tr:nth-child(2) td', (dataRowList) => {
      return dataRowList.map(dataRow => dataRow.textContent.trim());
    });
 
    const expectedDataRowContent = ['John', '30', 'New York']; // Replace with your expected data row content
 
    if (
      firstDataRowContent.length === expectedDataRowContent.length &&
      firstDataRowContent.every((content, index) => content === expectedDataRowContent[index])
    ) {
      console.log('TESTCASE:first_table_data_row_content:success');
    } else {
      console.log('TESTCASE:first_table_data_row_content:failure');
    }
  } catch (error) {
    console.log('TESTCASE:first_table_data_row_content:failure');
  }
 
  const page10 = await browser.newPage();
  try {
    await page10.goto('https://api.example.com/');
    await page10.waitForSelector('table tr td', { timeout: 2000 }); // Wait for table data rows
    const firstDataRowContent = await page10.$$eval('table tr:nth-child(3) td', (dataRowList) => {
      return dataRowList.map(dataRow => dataRow.textContent.trim());
    });
    const expectedDataRowContent = ['Alice', '25', 'Los Angeles']; // Replace with your expected data row content
 
    if (
      firstDataRowContent.length === expectedDataRowContent.length &&
      firstDataRowContent.every((content, index) => content === expectedDataRowContent[index])
    ) {
      console.log('TESTCASE:second_table_data_row_content:success');
    } else {
      console.log('TESTCASE:secomd_table_data_row_content:failure');
    }
  } catch (error) {
    console.log('TESTCASE:secomd_table_data_row_content:failure');
  }
  const page11 = await browser.newPage();
 
try{
  await page11.goto('https://api.example.com/'); // Replace with your actual URL
  await page11.waitForSelector('#name', { timeout: 2000 }); // Wait for the Name input field
  await page11.type('#name', 'John Doe'); // Type a value into the input field
  const nameInputValue = await page11.$eval('#name', (input) => input.value);
  if (nameInputValue === 'John Doe') {
    console.log('TESTCASE:name_input_field:success');
  } else {
    console.log('TESTCASE:name_input_field:failure');
  }
}catch{
  console.log('TESTCASE:name_input_field:failure');
}
 
const page12 = await browser.newPage();
 
try {
  await page12.goto('https://api.example.com/'); // Replace with your actual URL
 
  // Test Case: Verify the Email input field
  await page12.waitForSelector('#email', { timeout: 2000 }); // Wait for the Email input field
  await page12.type('#email', 'johndoe@example.com'); // Type a value into the Email input field
  const emailInputValue = await page12.$eval('#email', (input) => input.value);
  if (emailInputValue === 'johndoe@example.com') {
    console.log('TESTCASE:email_input_field:success');
  } else {
    console.log('TESTCASE:email_input_field:failure');
  }
} catch (error) {
  console.log('TESTCASE:email_input_field:failure');
} finally {
  await page12.close();
}
 
const page13 = await browser.newPage();
 
try {
  await page13.goto('https://api.example.com/'); // Replace with your actual URL
 
  // Test Case: Verify the Message input field
  await page13.waitForSelector('#message', { timeout: 2000 }); // Wait for the Message input field
  await page13.type('#message', 'This is a test message.'); // Type a value into the Message input field
  const messageInputValue = await page13.$eval('#message', (textarea) => textarea.value);
  if (messageInputValue === 'This is a test message.') {
    console.log('TESTCASE:message_input_field:success');
  } else {
    console.log('TESTCASE:message_input_field:failure');
  }
} catch (error) {
  console.log('TESTCASE:message_input_field:failure');
}
  finally {
    await page.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page6.close();
    await page7.close();
    await page8.close();
    await page9.close();
    await page10.close();
    await page11.close();
    await page12.close();
    await page13.close();
    await browser.close();
  }
})();