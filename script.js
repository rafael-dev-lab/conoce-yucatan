// MENSAJE DE BIEVENIDA
console.log("Hola, bienvenido a mi sitio web");

// SELECCIÓN DE DOM
const themeToggleBtn = document.getElementById("theme-toggle");
const clickCounterBtn = document.getElementById("click-counter-btn");
const clickCountDisplay = document.getElementById("click-count");

// PREFERENCIAS MODO OSURO
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

// ACTIVAR MODO
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// CONTADOR DE CLICS
let counter = 0;

clickCounterBtn.addEventListener("click", () => {
  counter += 1;
  clickCountDisplay.textContent = counter;
});
