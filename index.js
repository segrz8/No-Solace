const burger = document.querySelector('.fa-bars')
const nav = document.querySelector('.nav')

function openNav() {
    nav.classList.toggle('nav--open')
}

burger.addEventListener('click', openNav)
class DiscographyOpener {
    constructor() {
        document.querySelector('.arrow-mgla').addEventListener('click', () => this.handleDiscography('mgla'))
        document.querySelector('.arrow-ksm').addEventListener('click', () => this.handleDiscography('ksm'))
        document.querySelector('.arrow-noSolace').addEventListener('click', () => this.handleDiscography('noSolace'))
        document.querySelector('.arrow-ordersPoland').addEventListener('click', () => this.handleDiscography('ordersPoland'))

        document.querySelector('.navMgla').addEventListener('click', () => this.handleNav('mgla'))
        document.querySelector('.navKsm').addEventListener('click', () => this.handleNav('ksm'))
        document.querySelector('.navNoSolace').addEventListener('click', () => this.handleNav('noSolace'))
        document.querySelector('.navContact').addEventListener('click', () => this.handleNav('contact'))
        document.querySelector('.navOrdersPoland').addEventListener('click', () => this.handleNav('ordersPoland'))
    }

    handleDiscography = (subject) => {
        document.querySelector(`.${subject}__discography`).classList.toggle(`${subject}__discography--open`)

        window.scrollTo({
            top: document.querySelector(`.arrow-${subject}`).offsetTop - 120,
            // behavior: 'smooth',
        })
    }

    handleNav = (subject) => {
        window.scrollTo({
            top: document.querySelector(`.${subject}`).offsetTop - 80,
            // behavior: 'smooth',
        })

        nav.classList.toggle('nav--open')
    }
}

const discographyOpener = new DiscographyOpener()