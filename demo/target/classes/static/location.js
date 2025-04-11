// location.html
document.getElementById("updateLocation").addEventListener("click", function () {
    const selectedRadius = document.getElementById("locationRadius").value;

    // Get User Location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Send location & radius to backend
            fetch("http://localhost:8081/geolocation-service/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ latitude, longitude, radius: selectedRadius })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("locationStatus").innerText = "Location updated successfully!";
            })
            .catch(error => {
                console.error("Error updating location:", error);
                document.getElementById("locationStatus").innerText = "Failed to update location.";
            });
        });
    } else {
        document.getElementById("locationStatus").innerText = "Geolocation is not supported in your browser.";
    }
});
