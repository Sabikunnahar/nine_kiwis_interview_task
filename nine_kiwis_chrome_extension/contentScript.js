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

    // Category Dropdown
    const categoryDropdown = document.querySelector('label[aria-label="Category"]');
    if (categoryDropdown) {
        console.log("Category Dropdown Found:", categoryDropdown);

        // Open the dropdown
        categoryDropdown.click();
        console.log("Clicked Category Dropdown");

        // Wait for options to load
        setTimeout(() => {
            // Locate the desired category (e.g., 'Furniture')
            const desiredOption = Array.from(document.querySelectorAll('span'))
                .find(span => span.textContent.trim() === 'Furniture');

            if (desiredOption) {
                desiredOption.click();
                console.log("Category Selected: Furniture");
            } else {
                console.log("Desired Category Option Not Found");
            }
        }, 1000);
    } else {
        console.log("Category Dropdown not found.");
    }

    //3. Condition Dropdown
    const conditionDropdown = document.querySelector('label[aria-label="Condition"]');
    if (conditionDropdown) {
        console.log("Condition Dropdown Found:", conditionDropdown);

        // Open the dropdown
        conditionDropdown.click();
        console.log("Clicked Condition Dropdown");

        // Wait for options to load
        setTimeout(() => {
            // Locate the desired condition (e.g., 'Used – like new')
            const desiredCondition = Array.from(document.querySelectorAll('span'))
                .find(span => span.textContent.trim() === 'Used – like new');

            if (desiredCondition) {
                desiredCondition.click();
                console.log("Condition Selected: Used – like new");
            } else {
                console.log("Desired Condition Option Not Found");
            }
        }, 1000);
    } else {
        console.log("Condition Dropdown not found.");
    }

    // 4. Find the photo field (button to upload photos)
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

    // 5. Find the submit button and click it
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
