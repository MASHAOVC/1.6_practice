let callButtonHeader = document.querySelector('.header__button-call')
let callButtonSide = document.querySelector('.side-menu__footer-button-call')
let closeButtonCall = document.querySelector('.modal-call__header-button')
let overlay = document.querySelector('.overlay__modal')
let modalCall = document.querySelector('.modal-call')
let modalFeedback = document.querySelector('.modal-feedback')

let feedbackButtonHeader = document.querySelector('.header__button-chat')
let feedbackButtonSide = document.querySelector('.side-menu__footer-button-chat')
let closeButtonFeedback = document.querySelector('.modal-feedback__header-button')

callButtonHeader.addEventListener('click', openCall)
callButtonSide.addEventListener('click', openCall)
closeButtonCall.addEventListener('click', closeCall)
overlay.addEventListener('click', closeCall)

feedbackButtonHeader.addEventListener('click', openFeedback)
feedbackButtonSide.addEventListener('click', openFeedback)
closeButtonFeedback.addEventListener('click', closeFeedback)
overlay.addEventListener('click', closeFeedback)

function openCall () {
  modalCall.style.display = 'block'
  overlay.style.display = 'flex'
}

function closeCall () {
  modalCall.style.display = 'none'
  overlay.style.display = 'none'
}

function openFeedback () {
  modalFeedback.style.display = 'block'
  overlay.style.display = 'flex'
}

function closeFeedback () {
  modalFeedback.style.display = 'none'
  overlay.style.display = 'none'
}
