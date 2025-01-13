chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fillForm") {
        // Locate form fields on Facebook Marketplace
        document.querySelector('[name="title"]').value = request.data.title; // Fill the title
        document.querySelector('[name="description"]').value = request.data.description; // Fill the description
        document.querySelector('[name="price"]').value = request.data.price; // Fill the price

        // Send a response back to confirm the operation
        sendResponse({ status: "Form filled" });
    }
});
