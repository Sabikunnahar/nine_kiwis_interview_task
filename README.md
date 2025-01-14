# Facebook Marketplace Chrome Extension

## Project Overview
This project is a **Chrome Extension** designed to automate the process of uploading products to the **French Facebook Marketplace**. The extension works in conjunction with a **Laravel back-end** that provides the product details. The extension automatically fills in the product details, including title, description, price, category, condition, and photo, and submits the product to the Facebook Marketplace.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Code Explanation](#code-explanation)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features
- Automatic form filling for Facebook Marketplace product uploads.
- Dynamic handling of fields like title, price, category, condition, and photo upload.
- Works with a Laravel back-end to fetch product details.

---

## Technologies Used
- **Chrome Extensions API**
- **JavaScript (content script)**
- **HTML & CSS** for the extension UI
- **Laravel** for the back-end API

---

## Installation
### 1. Clone the repository
```bash
git clone https://github.com/your-repo/facebook-marketplace-extension.git
```
### 2. Load the extension into Chrome
1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer Mode**.
3. Click **Load unpacked**.
4. Select the project folder.

### 3. Set up the Laravel back-end
Follow the instructions in the Laravel back-end repository to set up the API.

---

## Usage
1. Open the Facebook Marketplace in your Chrome browser.
2. Click on the extension icon.
3. Enter the product details in the popup or let the extension fetch details from the Laravel back-end.
4. Click **Fill Form** to automatically populate the Facebook Marketplace form.

---

## File Structure
```
facebook-marketplace-extension/
├── manifest.json
├── popup.html
├── popup.js
├── contentScript.js
├── styles.css
└── README.md
```
---

## Code Explanation
### contentScript.js
The `contentScript.js` file is the core of the Chrome extension. It interacts with the Facebook Marketplace page to fill in the product details.

Key steps performed by the script:
1. **Title and Price Fields:**
   - Finds the input fields for title and price using selectors and fills them with the provided values.
2. **Category and Condition Dropdowns:**
   - Opens the dropdowns for category and condition, searches for the desired options, and selects them.
3. **Photo Upload:**
   - Simulates a click on the photo upload button.
4. **Submit Button:**
   - Finds and clicks the submit button to finalize the listing.

---

## Troubleshooting
### Common Issues
1. **Element Not Found:**
   - Ensure that the selectors used in `contentScript.js` match the current Facebook Marketplace DOM structure.
   - If the structure changes, update the selectors accordingly.

2. **Submit Button Not Working:**
   - Check that the submit button is correctly identified and enabled before clicking.

---

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
