//javascript


const menu = document.querySelectorAll('.js-menu');
const sidebar = document.querySelectorAll('.js-sidebar');

menu.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        sidebar.forEach(sidebarItem => sidebarItem.classList.toggle('is-active'));
    });
});    