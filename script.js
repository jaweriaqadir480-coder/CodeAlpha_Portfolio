const roles = [
  "Frontend Developer",
  "Software Engineering Student",
  "Web Designer",
];

let index = 0;

const roleElement = document.querySelector(".hero h2");

setInterval(() => {
  index = (index + 1) % roles.length;
  roleElement.textContent = roles[index];
}, 2000);

// ================= Reveal Animation =================

const reveals = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right",
);

const cards = document.querySelectorAll(".skill-card, .project-card");

function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    const height = section.offsetHeight;

    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
