function toggleNavigation() {
  const headerNav = document.querySelector('.header__nav');
  if (headerNav.classList.contains('active')) {
    headerNav.classList.remove('active');
  } else {
    headerNav.classList.add('active');
  }
}

function handleDocumentLoad() {
  const navHandle = document.querySelector('.header__toggle');
  navHandle.addEventListener('click', toggleNavigation);
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
