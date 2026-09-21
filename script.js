const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menu) {
  menu.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    if (open) {
      navLinks.style.display = "flex";
      navLinks.style.position = "absolute";
      navLinks.style.top = "70px";
      navLinks.style.right = "4%";
      navLinks.style.flexDirection = "column";
      navLinks.style.gap = "15px";
      navLinks.style.padding = "18px";
      navLinks.style.borderRadius = "15px";
      navLinks.style.background = "rgba(4,15,25,.96)";
      navLinks.style.border = "1px solid rgba(255,255,255,.12)";
    } else {
      navLinks.removeAttribute("style");
    }
  });
}
