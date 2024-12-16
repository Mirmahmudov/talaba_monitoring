// script.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!username || !password || !role) {
    alert("Iltimos, barcha maydonlarni to'ldiring.");
    return;
  }

  // Simulyatsiya qilingan autentifikatsiya
  const users = {
    admin: { username: "azizbek", password: "azizbek" },
    teacher: { username: "azizbek", password: "azizbek" },
    student: { username: "azizbek", password: "azizbek" },
  };

  if (
    users[role] &&
    users[role].username === username &&
    users[role].password === password
  ) {
    alert(`Welcome, ${role}!`);
    // Redirect to specific dashboard
    window.location.href = `home.html`;
  } else {
    alert("Login yoki parol noto'g'ri!");
  }
});

// Parolni yashirish/ko‘rsatish
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    this.textContent = type === "password" ? "👁️" : "🙈";
  });
