// ================= Role Typing Text =================

const roles = [
  "Software Engineering Student",
  "Frontend Developer",
  "Web Designer",
];

let roleIndex = 0;

const roleElement = document.querySelector("#typing-text");

if (roleElement) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
  }, 2000);
}

// ================= Mobile Menu Toggle =================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // close menu when a nav link is tapped
  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });

  // close menu when tapping outside of it
  document.addEventListener("click", (e) => {
    const isClickInside = navbar.contains(e.target) || menuToggle.contains(e.target);
    if (!isClickInside) {
      navbar.classList.remove("open");
    }
  });
}

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
    if (top < window.innerHeight - 80 && !card.classList.contains("show")) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= Active Nav Link on Scroll =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;
    const height = section.offsetHeight;

    if (window.pageYOffset >= top && window.pageYOffset < top + height) {
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