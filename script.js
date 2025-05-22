const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const body = document.body;

// Load Theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  icon.textContent = "☀️";
} else {
  icon.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    icon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
