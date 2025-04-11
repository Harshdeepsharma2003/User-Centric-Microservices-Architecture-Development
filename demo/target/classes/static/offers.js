
//offers.html

document.getElementById("applyFilters").addEventListener("click", function () {
    const selectedCategory = document.getElementById("categoryFilter").value;
    const selectedRadius = document.getElementById("radiusFilter").value;

    fetch(`http://localhost:8082/offerdeals?category=${selectedCategory}&radius=${selectedRadius}`)
        .then(response => response.json())
        .then(deals => {
            const container = document.getElementById("offersContainer");
            container.innerHTML = deals.map(deal => `
                <div class="offer-card">
                    <h3>${deal.title}</h3>
                    <p>${deal.description}</p>
                    <p><strong>Discount:</strong> ${deal.discount}% off</p>
                    <p><strong>Expires:</strong> ${deal.expiryDate}</p>
                    <button class="btn btn-primary">Claim Offer</button>
                </div>
            `).join("");
        })
        .catch(error => console.error("Error fetching offers:", error));
});

