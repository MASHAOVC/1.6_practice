let readMoreButton = document.querySelector('.aboutus__readmore')
let [icon, text] = readMoreButton.children;

let isOpen = false;

readMoreButton.addEventListener('click', function() {
  isOpen = !isOpen;

  if (isOpen) {
      icon.classList.add('show-more-element__button--close')
      icon.classList.remove('show-more-element__button--expand')
      text.textContent = 'Скрыть';
  } else {
      icon.classList.add('show-more-element__button--expand')
      icon.classList.remove('show-more-element__button--close')
      text.textContent = 'Читать далее';
  }
})
