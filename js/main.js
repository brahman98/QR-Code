// Темная-светлая тема - переключатель
document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
        const light = document.getElementById('themeToggle');
        light.setAttribute("src", "img/light_mode.svg");
        const lang = document.getElementById('langToggle');
        lang.setAttribute("src", "img/language.svg");
        
    } else {
        document.body.className = 'light-theme';
        const light = document.getElementById('themeToggle');
        light.setAttribute("src", "img/moon.svg");
        const lang = document.getElementById('langToggle');
        lang.setAttribute("src", "img/globe-solid.svg");
    }
});



// Переключение языка
const details = document.querySelector('.lang-dropdown');
const langOptions = document.querySelectorAll('.lang-options li');
const langDisplay = document.querySelector('.header__lang');

// Функция для приведения первой буквы к верхнему регистру
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Закрытие списка при выборе языка
langOptions.forEach(option => {
  option.addEventListener('click', () => {
    const selectedLang = option.getAttribute('data-lang');
    langDisplay.textContent = capitalizeFirstLetter(selectedLang); // Первая буква заглавная
    details.removeAttribute('open'); // Закрытие списка после выбора
  });
});

// Закрытие списка при клике за пределами
document.addEventListener('click', (event) => {
  if (!details.contains(event.target)) { // Если клик был не внутри details
    details.removeAttribute('open'); // Закрываем список
  }
});
