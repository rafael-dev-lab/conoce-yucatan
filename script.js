// Selección de elementos del DOM
const themeToggleBtn = document.getElementById("theme-toggle");

// Comprobar preferencia guardada en localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

// Alternar modo claro / oscuro al hacer clic en el círculo
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
