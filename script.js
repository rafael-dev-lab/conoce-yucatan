// SELECCIOND DE ELEMENTOS
const themeToggleBtn = document.getElementById("theme-toggle");

// MANTENER EN MEMORIA LOCAL LAS PREFERENCIAS
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

// ACTIVAR Y DESACTIVAR MODO CLARO Y OSCURO
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
