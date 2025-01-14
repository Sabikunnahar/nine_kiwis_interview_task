document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchProduct");
    const productList = document.getElementById("productList");

    if (!fetchButton || !productList) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    // Fetch products from Laravel backend
    fetchButton.addEventListener("click", () => {
        fetch("http://127.0.0.1:8000/api/products")
            .then(response => response.json())
            .then(data => {
                productList.innerHTML = ""; // Clear the product list
                data.forEach(product => {
                    const productItem = document.createElement("div");
                    productItem.className = "product-item";
                    productItem.innerHTML = `
                        <h2>${product.name}</h2>
                        <p><strong>Identifier:</strong> ${product.identifier}</p>
                        <p><strong>Description:</strong> ${product.description}</p>
                        <p><strong>Price:</strong> €${product.price}</p>
                        <button class="fillFormButton"
                            data-title="${product.name}"
                            data-description="${product.description}"
                            data-price="${product.price}">
                            Fill Facebook Form
                        </button>
                    `;
                    productList.appendChild(productItem);
                });

                // Attach event listeners to the "Fill Facebook Form" buttons
                document.querySelectorAll(".fillFormButton").forEach(button => {
                    button.addEventListener("click", () => {
                        const title = button.getAttribute("data-title");
                        const description = button.getAttribute("data-description");
                        const price = button.getAttribute("data-price");

                        // Send a message to the content script
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                            console.log("Sending message to content script:", {
                                action: "fillForm",
                                data: { title, description, price },
                            });

                            chrome.tabs.sendMessage(tabs[0].id, {
                                action: "fillForm",
                                data: { title, description, price },
                            }, (response) => {
                                if (response && response.status === "Form filled and submitted") {
                                    alert("Form filled successfully and submitted!");
                                } else {
                                    console.error("Error response from content script:", response);
                                    alert("Failed to fill the form. Make sure you're on the Facebook Marketplace page.");
                                }
                            });
                        });
                    });
                });
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
                alert("Failed to fetch product details. Check the console for more info.");
            });
    });
});
