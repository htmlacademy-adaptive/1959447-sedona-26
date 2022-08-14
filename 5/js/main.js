let menu = document.querySelector('.header');
let openMenuButton = document.querySelector('.header__toggle');

openMenuButton.addEventListener('click', function () {
  menu.classList.toggle('header--opened');
});
