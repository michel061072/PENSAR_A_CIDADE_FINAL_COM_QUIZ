const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn?.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(opened));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    btn?.setAttribute("aria-expanded", "false");
  });
});
