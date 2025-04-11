// index
document.getElementById("authForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:8080/userservice/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => alert(data.message))
  .catch(error => console.error("Error:", error));
});

// Toggle between login & sign-up
document.getElementById("toggleForm").addEventListener("click", function(event) {
  event.preventDefault();
  const title = document.getElementById("form-title");
  const toggleMessage = document.getElementById("toggleMessage");

  if (title.innerText === "Login") {
    title.innerText = "Sign Up";
    toggleMessage.innerHTML = 'Already have an account? <a href="#" id="toggleForm">Login</a>';
  } else {
    title.innerText = "Login";
    toggleMessage.innerHTML = "Don't have an account? <a href='#' id='toggleForm'>Sign Up</a>";
  }
});
