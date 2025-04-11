
//contact.html
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("http://localhost:8080/userservice/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("statusMessage").innerText = "Message sent successfully!";
    })
    .catch(error => {
        console.error("Error sending message:", error);
        document.getElementById("statusMessage").innerText = "Failed to send message.";
    });
});