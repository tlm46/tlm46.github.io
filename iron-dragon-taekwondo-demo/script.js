const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const form = document.querySelector("#contactForm");
const note = document.querySelector("#formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "Thanks! This demo form is ready to connect to Formspree, Netlify Forms, WhatsApp or your preferred backend.";
  form.reset();
});
