"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Bienvenido a Conoce Yucatán");

  // ELEMENTOS DEL DOM
  const themeToggleBtn = document.getElementById("theme-toggle");
  const clickCounterBtn = document.getElementById("click-counter-btn");
  const clickCountDisplay = document.getElementById("click-count");

  // MODO OSCURO
  try {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  } catch (error) {
    console.warn("No se pudo recuperar el tema:", error);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      const isDark = document.body.classList.contains("dark-theme");

      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch (error) {
        console.warn("No se pudo guardar el tema:", error);
      }
    });
  }

  // CONTADOR DE CLICS
  let counter = 0;

  if (clickCounterBtn && clickCountDisplay) {
    clickCounterBtn.addEventListener("click", () => {
      counter++;
      clickCountDisplay.textContent = counter;
    });
  }

  // ANIMACIONES AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 900,
      once: true,
    });
  }

  // VERIFICAR BOOTSTRAP
  if (typeof bootstrap === "undefined") {
    console.error("Bootstrap no está cargado. Revisa el script en index.html.");
    return;
  }

  // TOOLTIPS DE BOOTSTRAP
  const tooltipElements = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
  );

  tooltipElements.forEach((element) => {
    bootstrap.Tooltip.getOrCreateInstance(element);
  });

  // DATOS CURIOSOS DE YUCATÁN
  const curiousFacts = [
    "Yucatán alberga miles de cenotes formados en roca caliza.",
    "Chichén Itzá es Patrimonio Mundial de la UNESCO.",
    "La cochinita pibil es uno de los platillos tradicionales de Yucatán.",
    "Uxmal es uno de los grandes ejemplos de arquitectura maya Puuc.",
    "El nombre de los cenotes proviene del término maya dz'onot.",
  ];

  // ELEMENTOS DEL TOAST
  const toastButton = document.getElementById("btn-curious-fact");
  const toastElement = document.getElementById("curiousFactToast");
  const toastMessage = document.getElementById("curiousFactMessage");

  if (toastButton && toastElement && toastMessage) {
    const toast = bootstrap.Toast.getOrCreateInstance(toastElement, {
      autohide: true,
      delay: 5500,
    });

    let lastFactIndex = -1;

    toastButton.addEventListener("click", () => {
      let randomIndex;

      do {
        randomIndex = Math.floor(Math.random() * curiousFacts.length);
      } while (randomIndex === lastFactIndex && curiousFacts.length > 1);

      lastFactIndex = randomIndex;

      toastMessage.textContent = curiousFacts[randomIndex];

      toast.show();
    });
  }
});
