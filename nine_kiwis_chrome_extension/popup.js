// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fetchProduct").addEventListener("click", () => {
        // Fetch product details from the Laravel backend
        fetch("http://127.0.0.1:8000/api/products")
            .then(response => response.json())
            .then(data => {
                const productList = document.getElementById("productList");
                productList.innerHTML = ""; // Clear the product list

                data.forEach(product => {
                    const productItem = document.createElement("div");
                    productItem.className = "product-item";
                    productItem.innerHTML = `
                        <h2>${product.name}</h2>
                        <p><strong>Identifier:</strong> ${product.identifier}</p>
                        <p><strong>Description:</strong> ${product.description}</p>
                        <p><strong>Price:</strong> €${product.price}</p>
                    `;
                    productList.appendChild(productItem);
                });
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
                alert("Failed to fetch product details. Check the console for more info.");
            });
    });
});
