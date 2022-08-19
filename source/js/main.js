let menu = document.querySelector('.header');
let openMenuButton = document.querySelector('.toggle');

openMenuButton.addEventListener('click', function () {
  menu.classList.toggle('header--opened');
});
