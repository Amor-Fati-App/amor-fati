// Custom Cursor Logic
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" },
  );
});

// Hover expansion
document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursorOutline.style.borderColor = "#d4af37";
    cursorOutline.style.backgroundColor = "rgba(212, 175, 55, 0.05)";
  });
  el.addEventListener("mouseleave", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
    cursorOutline.style.borderColor = "rgba(212, 175, 55, 0.3)";
    cursorOutline.style.backgroundColor = "transparent";
  });
});

// Reveal on Scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal-view").forEach((el) => observer.observe(el));
