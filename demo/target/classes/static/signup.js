document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    console.log(document.getElementById("nameSignup")); // Check if element exists
    console.log(document.getElementById("emailSignup"));
    console.log(document.getElementById("phoneSignup"));
    console.log(document.getElementById("newPasswordSignup"));

    const user = {
        name: document.getElementById("nameSignup")?.value || "", // Use fallback empty string
        email: document.getElementById("emailSignup")?.value || "",
        phonenumber: document.getElementById("phoneSignup")?.value || "",
        password: document.getElementById("newPasswordSignup")?.value || "",
        locationConsent: false,
        receiveOffers: false,
        receiveAlerts: false,

    };

    const response = await fetch("http://localhost:8098/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        alert("Signup successful! Please log in.");
        window.location.href = "profile1.html"; // Redirect back to login
    } else {
        alert("Signup failed. Try again.");
    }
});
