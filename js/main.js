//javascript


const menu = document.querySelector('.js-menu');
const sidebar = document.querySelectorAll('.js-sidebar');

menu.addEventListener('click', () => {
    sidebar.forEach(el => el.classList.toggle('is-active'));
});