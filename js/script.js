// HAMBURGER

const hamburger = document.querySelector('.nav__hamburger')
const navMenu = document.querySelector('.nav-menu')
const menuText = document.querySelector('.nav__text-box')

function showNavMenu(event) {
    hamburger.classList.toggle('open')
    menuText.classList.toggle('text-ease')
    navMenu.classList.toggle('menu-ease')

    if (searchBox.classList.contains('show-search-box')) {
        searchBox.classList.toggle('show-search-box')
        nav.classList.toggle('nav-background')
        logo.classList.toggle('hide')
    }
}

hamburger.addEventListener('click',showNavMenu)
menuText.addEventListener('click',showNavMenu)

// SEARCHBOX

const searchIcon = document.querySelector('.nav__icon')
const searchBox = document.querySelector('.search-box')
const searchBoxIcon = document.querySelector('.search-box__icon')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.nav__logo')

function showSearchBox(event) {

    searchBox.classList.toggle('show-search-box')
    nav.classList.toggle('nav-background')
    logo.classList.toggle('hide')

    if (navMenu.classList.contains('menu-ease')) {
        navMenu.classList.toggle('menu-ease')
        menuText.classList.toggle('text-ease')
        hamburger.classList.toggle('open')
    }
}

searchIcon.addEventListener('click',showSearchBox)
searchBoxIcon.addEventListener('click',showSearchBox)

