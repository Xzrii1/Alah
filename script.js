// Toggle Dark/Light Mode
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Cek tema di localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeIcon.textContent = '☀️';
} else {
  themeIcon.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
