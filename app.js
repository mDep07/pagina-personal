document.addEventListener('DOMContentLoaded', Init);

function Init() {
    const btnMenu = document.querySelector('.menu__button');
    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        e.target.classList.toggle('active');
    })
}