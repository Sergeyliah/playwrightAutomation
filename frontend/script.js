document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "adminpass") {
        localStorage.setItem("user", JSON.stringify({ username, role: "admin" }));
        window.location.href = "admin.html";
      } else if (username === "user1" && password === "password1") {
        localStorage.setItem("user", JSON.stringify({ username: "Serge", role: "user" }));
        window.location.href = "user-details.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (window.location.pathname.endsWith("user-details.html")) {
    if (!user || user.role !== "user") {
      alert("Unauthorized");
      window.location.href = "login.html";
    } else {
      document.getElementById("user-name").textContent = user.username;
    }
  }

  if (window.location.pathname.endsWith("admin.html")) {
    if (!user || user.role !== "admin") {
      alert("Unauthorized");
      window.location.href = "login.html";
    } else {
      document.getElementById("admin-name").textContent = user.username;
    }
  }
});
