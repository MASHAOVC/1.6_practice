let callButtonHeader = document.querySelector('.header__button-call')
let callButtonSide = document.querySelector('.side-menu__footer-button-call')
let closeButtonCall = document.querySelector('.modal-call__header-button')
let overlay = document.querySelector('.overlay')
let modalCall = document.querySelector('.modal-call')
let modalFeedback = document.querySelector('.modal-feedback')

let feedbackButtonHeader = document.querySelector('.header__button-chat')
let feedbackButtonSide = document.querySelector('.side-menu__footer-button-chat')
let closeButtonFeedback = document.querySelector('.modal-feedback__header-button')

callButtonHeader.addEventListener('click', open)
callButtonSide.addEventListener('click', open)
closeButtonCall.addEventListener('click', close)
overlay.addEventListener('click', close)

function open () {
  modalCall.style.display = 'block'
  overlay.style.display = 'flex'
}

function close () {
  modalCall.style.display = 'none'
  overlay.style.display = 'none'
}
