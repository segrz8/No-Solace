const burger = document.querySelector('.fa-bars')
const nav = document.querySelector('.nav')

function openNav() {
    nav.classList.toggle('nav--navOpen')
}

burger.addEventListener('click', openNav)