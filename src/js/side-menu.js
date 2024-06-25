let burgerButton = document.querySelector('.header__button-burger')
let closeButton = document.querySelector('.side-menu__header-button-close')
let sideMenu = document.querySelector('.side-menu')
let overlay = document.querySelector('.overlay__page')

burgerButton.addEventListener('click', open)
closeButton.addEventListener('click', close)
overlay.addEventListener('click', close)
window.addEventListener('resize', normalize)

function open() {
  sideMenu.style.display = 'flex'
  overlay.style.display = 'flex'
}

function close() {
  sideMenu.style.display = 'none'
  overlay.style.display = 'none'
}

function normalize() {
  if (window.innerWidth > 1426) {
    sideMenu.style.display = 'flex'
  } else {
    close()
  }
}
