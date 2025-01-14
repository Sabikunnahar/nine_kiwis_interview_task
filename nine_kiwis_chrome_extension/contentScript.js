const fillForm = (data) => {
    const { title, description, price, category, condition, photoPath } = data;

    console.log("Filling form with data:", title, description, price, category, condition, photoPath);

    // 1. Find the title field and set the value
    const titleField = document.querySelector('input[id=":r1a:"]');
    console.log("Title Field:", titleField);
    if (titleField) {
      titleField.value = title;
    } else {
      console.log("Title Field not found");
    }

    // 2. Find the price field and set the value
    const priceField = document.querySelector('input[id=":r1d:"]');
    console.log("Price Field:", priceField);
    if (priceField) {
      priceField.value = price;
    } else {
      console.log("Price Field not found");
    }

    // 3. Find and select the category field (dropdown)
    const categoryDropdown = document.querySelector('div[id=":r40:"]');
    console.log("Category Field:", categoryDropdown);
    if (categoryDropdown) {
      categoryDropdown.click();  // Click to open the category dropdown
      const categoryOption = Array.from(document.querySelectorAll('span.x193iq5w')).find(option => option.innerText === category);
      if (categoryOption) {
        categoryOption.click(); // Select the desired category option
      } else {
        console.log("Category option not found or mismatch");
      }
    } else {
      console.log("Category Field not found");
    }

    // 4. Find and select the condition field (dropdown)
    const conditionField = document.querySelector('label[aria-label="Condition"]');
    console.log("Condition Field:", conditionField);
    if (conditionField) {
      conditionField.click();  // Click to open the condition dropdown
      const conditionOption = Array.from(document.querySelectorAll('span.x6ikm8r')).find(option => option.innerText === condition);
      if (conditionOption) {
        conditionOption.click(); // Select the desired condition option
      } else {
        console.log("Condition option not found or mismatch");
      }
    } else {
      console.log("Condition Field not found");
    }

    // 5. Find the photo field (button to upload photos)
    const photoField = document.querySelector('div.x1i10hfl.x1qjc9v5');
    console.log("Photo Field:", photoField);
    if (photoField) {
      photoField.click();  // Simulate click to open the photo uploader
      console.log("Clicking photo upload button...");
      // Handle file upload (this might need user interaction due to browser security limitations)
      if (photoPath) {
        const inputFile = document.querySelector('input[type="file"]');
        if (inputFile) {
          inputFile.value = photoPath;  // Set the path for photo upload (you may need to set a file path)
        } else {
          console.log("Photo file input not found");
        }
      }
    } else {
      console.log("Photo Field not found");
    }

    // 6. Find the submit button and click it
    const submitButton = document.querySelector('button[type="submit"]');
    console.log("Submit Button:", submitButton);
    if (submitButton) {
      submitButton.click();
      console.log("Form submitted");
    } else {
      console.log("Submit button not found");
    }
  };

  // Listen for the message from the popup to fill the form
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fillForm') {
      fillForm(message.data);
      sendResponse({ status: 'Form filled' });
    }
  });
