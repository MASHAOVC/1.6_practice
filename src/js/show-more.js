let showMoreButton = document.querySelector('.show-more-element');
let [icon, text] = showMoreButton.children;
let hiddenItems768 = document.querySelectorAll('.brands-list__list-item--hidden768');
let hiddenItems1100 = document.querySelectorAll('.brands-list__list-item--hidden1100');

let isOpen = false;

function normalize() {
    if (window.innerWidth < 768) {
        showAll();
        return;
    }

    if (isOpen) {
        showAll();
    } else {
        if (window.innerWidth >= 768 && window.innerWidth < 1100) {

            for (let i = 0; i < hiddenItems768.length; i++) {
                let item = hiddenItems768[i];
                item.style.display = 'none';
            }

        } else if (window.innerWidth >= 1100) {

            for (let i = 0; i < hiddenItems768.length; i++) {
                let item = hiddenItems768[i];
                item.style.display = 'flex';
            }
            for (let i = 0; i < hiddenItems1100.length; i++) {
                let item = hiddenItems1100[i];
                item.style.display = 'none';
            }

        }
    }
}

function showAll() {
    for (let i = 0; i < hiddenItems768.length; i++) {
        let item = hiddenItems768[i];
        item.style.display = 'flex';
    }
}

showMoreButton.addEventListener('click', function() {
    isOpen = !isOpen;

    if (isOpen) {
        icon.src = '../img/icon-close.png';
        text.textContent = 'Скрыть';
    } else {
        icon.src = '../img/icon-expand.png';
        text.textContent = 'Показать все';
    }

    normalize();
});

window.addEventListener('resize', normalize);
