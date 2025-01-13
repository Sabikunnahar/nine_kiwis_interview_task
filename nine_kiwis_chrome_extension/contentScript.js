// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "fillForm") {
//         // Locate form fields on Facebook Marketplace
//         document.querySelector('[name="title"]').value = request.data.title; // Fill the title
//         document.querySelector('[name="description"]').value = request.data.description; // Fill the description
//         document.querySelector('[name="price"]').value = request.data.price; // Fill the price

//         // Send a response back to confirm the operation
//         sendResponse({ status: "Form filled" });
//     }
// });

const titleField = document.querySelector('x1i10hfl xggy1nq x1s07b3s x1kdt53j x1a2a7pz xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x9f619 xzsf02u x1uxerd5 x1fcty0u x132q4wb x1a8lsjc x1pi30zi x1swvt13 x9desvi xh8yej3'); // Adjust with your actual class
if (titleField) {
    titleField.value = request.data.title; // Set the title
    titleField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
} else {
    console.error("Title field not found!");
}

