function toggleNavigation() {
    var header_nav = document.querySelector('.header__nav');
    if (header_nav.classList.contains('active')) {
        header_nav.classList.remove('active');
    } else {
        header_nav.classList.add('active');
    }
}

function handleDocumentLoad() {
    var nav_handle = document.querySelector('.header__toggle');
    nav_handle.addEventListener('click', toggleNavigation);
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);