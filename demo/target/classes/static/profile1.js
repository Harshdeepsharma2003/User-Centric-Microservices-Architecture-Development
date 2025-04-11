document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("profileForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = localStorage.getItem("loggedInEmail"); // make sure this is set on login

        const userProfile = {
            phonenumber: document.getElementById("phoneNumber").value,
            locationConsent: document.getElementById("locationConsent").checked,
            receiveOffers: document.getElementById("receiveOffers").checked,
            receiveAlerts: document.getElementById("receiveAlerts").checked,
            preferredLanguage: document.getElementById("preferredLanguage").value
        };

        try {
            const response = await fetch(`http://localhost:8098/auth/updateProfile?email=${encodeURIComponent(email)}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userProfile)
            });

            if (response.ok) {
                alert("Profile updated successfully!");
            } else {
                const errorMessage = await response.text();
                alert("Update failed: " + errorMessage);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Something went wrong.");
        }
    });
});
