// находим места кликов на кнопки меню
const menuOpen = document.querySelector('.header__icon');
const menuClose = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
// / объявление функций открытия и закрытия меню
function togglePopUp(popUp) {
    popUp.classList.toggle("menu__opened");
}
menuOpen.addEventListener("click", () => togglePopUp(menu));
menuClose.addEventListener("click", () => togglePopUp(menu));