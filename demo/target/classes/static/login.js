console.log("login.js loaded ✅");

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    const params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);

    try {
        const response = await fetch("http://localhost:8098/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params,
        });

        console.log("Response status:", response.status);

        if (response.ok) {
            const userData = await response.json();

            console.log("User data:", userData);
            alert("Login successful!");
             localStorage.setItem("loggedInEmail", userData.email); // ✅ Save email
            window.location.href = "profile1.html";

        } else {
            const errorText = await response.text();
            console.error("Login failed:", errorText);
            alert("Invalid credentials.");
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong. Check console.");
    }
});
