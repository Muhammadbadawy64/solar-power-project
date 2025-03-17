// document.getElementById('menu-toggle').addEventListener("click" , e => {
//     const menu = document.getElementById('menu');
//     menu.classList.toggle('hidden')
// })

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});