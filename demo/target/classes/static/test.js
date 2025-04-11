function getLocation() {
    const allowLocation = document.getElementById('allowLocation');
    const statusMessage = document.getElementById('statusMessage');

    if (allowLocation.checked) {
        if ("geolocation" in navigator) {
            statusMessage.textContent = "Retrieving location...";
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                // Send coordinates to the backend
                fetch('http://localhost:8090/offerDeals/track', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        offerLatitude: latitude, // Match backend key
                        offerLongitude: longitude // Match backend key
                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        statusMessage.textContent = `Location successfully sent: Latitude ${latitude}, Longitude ${longitude}`;
                        fetchNearbyOffers(latitude, longitude); // Fetch offers after sending location
                    })
                    .catch(error => {
                        console.error('Error sending location data:', error);
                        statusMessage.textContent = "Failed to send location data to the server.";
                    });
            }, (error) => {
                statusMessage.textContent = "Error retrieving location: " + error.message;
            });
        } else {
            statusMessage.textContent = "Geolocation is not supported by your browser.";
        }
    } else {
        statusMessage.textContent = "Please check the box to allow location tracking.";
    }
}

function fetchNearbyOffers(latitude, longitude) {
    const offersStatus = document.getElementById('offersStatus');
    const offersList = document.getElementById('offersList');

    offersStatus.textContent = "Fetching nearby offers...";
    fetch(`http://localhost:8090/offerDeals/nearby?latitude=${latitude}&longitude=${longitude}`)
       .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
       .then(responseJson => {
           console.log("Offers response:", responseJson);

           // Check if response is an error message instead of offer data
           if (responseJson.message && responseJson.message === "No offers found nearby") {
               offersStatus.textContent = "Here are the offers near you:";
               offersList.innerHTML = "<p>No nearby offers found.</p>";
               return;
           }

           // Wrap single offer object into an array
           const offers = Array.isArray(responseJson) ? responseJson : [responseJson];

           offersStatus.textContent = "Here are the offers near you:";
           offersList.innerHTML = "";

           offers.forEach(offer => {
               console.log("Offer object:", offer);

               const offerElement = document.createElement('div');
               offerElement.textContent = `Title: ${offer.title}, Discount: ${offer.discount}%`;
               offersList.appendChild(offerElement);
           });
       })
       .catch(error => {
           console.error('Error fetching nearby offers:', error);
           offersStatus.textContent = "Failed to fetch nearby offers.";
       });

}

let currentPage = 0; // Current page for pagination
const pageSize = 10; // Number of offers per page

function fetchPaginatedOffers() {
    const offersList = document.getElementById("offersList");
    const offersStatus = document.getElementById("offersStatus");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");

    offersList.innerHTML = ""; // Clear existing offers
    offersStatus.textContent = "Fetching offers...";

    fetch(`http://localhost:8090/offerDeals?page=${currentPage}&size=${pageSize}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(offers => {
            if (offers.length > 0) {
                displayOffers(offers, "offersList");
                offersStatus.textContent = "";
            } else {
                offersStatus.textContent = "No offers found.";
            }
            updatePaginationControls(offers.length);
        })
        .catch(error => {
            offersStatus.textContent = "Error fetching offers.";
            console.error("Error:", error);
        });
}

function displayOffers(offers, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear existing content

    offers.forEach(offer => {
        const offerCard = document.createElement("div");
        offerCard.className = "offer-card";
        offerCard.style = `
            background: rgba(255, 255, 255, 0.2);
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        `;
        offerCard.innerHTML = `
            <h3>${offer.offerTitle}</h3>
            <p>${offer.offerDescription}</p>
            <p><strong>Category:</strong> ${offer.offerCategory}</p>
            <p><strong>Discount:</strong> ${offer.discountPercentage}%</p>
        `;
        container.appendChild(offerCard);
    });
}

function updatePaginationControls(offersCount) {
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");

    prevPageButton.disabled = currentPage === 0;
    nextPageButton.disabled = offersCount < pageSize;
}

function changePage(delta) {
    currentPage += delta;
    fetchPaginatedOffers();
}

// Initial fetch for paginated offers
fetchPaginatedOffers();
