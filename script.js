/* -------------------------------
   THEME TOGGLE
--------------------------------*/
const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
} else {
    toggle.textContent = "🌙";
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* -------------------------------
   MOBILE MENU ANIMATION
--------------------------------*/
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    nav.classList.toggle("mobile");
    nav.classList.toggle("open");
});

// Close when clicking menu links
document.querySelectorAll("#nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        nav.classList.remove("open");

        // Wait for the closing animation to finish
        setTimeout(() => nav.classList.remove("mobile"), 300);
    });
});
