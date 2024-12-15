// dashboard.js

window.onload = function () {
  // Simulyatsiya qilingan ma'lumotlar
  const totalStudents = 150;
  const overallRating = 85; // Asosiy reyting
  const successfulTests = 120;

  // Statistikani o‘rnatish
  document.getElementById("totalStudents").textContent = totalStudents;
  document.getElementById("overallRating").textContent = `${overallRating}%`;
  document.getElementById("successfulTests").textContent = successfulTests;

  // Grafikni yaratish
  const ctx = document.getElementById("studentChart").getContext("2d");
  const studentChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Matematika", "Tarix", "Ingliz tili", "Geografiya"],
      datasets: [
        {
          label: "Talabalar faoliyati",
          data: [50, 80, 75, 85, 70],
          backgroundColor: "#007BFF",
          borderColor: "#0056b3",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

// Logout Function
function logout() {
  alert("Siz tizimdan muvaffaqiyatli chiqdingiz.");
  window.location.href = "./index.html";
}
