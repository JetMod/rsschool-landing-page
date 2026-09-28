let themeBtn = document.querySelector('.theme-toggle');
let html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (themeBtn) {
    if (theme === 'dark') {
      themeBtn.textContent = 'день';
      themeBtn.setAttribute('aria-label', 'Включить светлую тему');
    } else {
      themeBtn.textContent = 'ночь';
      themeBtn.setAttribute('aria-label', 'Включить тёмную тему');
    }
  }
}

let saved = localStorage.getItem('theme');
if (saved === 'dark' || saved === 'light') {
  setTheme(saved);
} else {
  setTheme('light');
}

if (themeBtn) {
  themeBtn.onclick = function () {
    if (html.getAttribute('data-theme') === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
}
