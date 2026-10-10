// The full navigation stays visible when JavaScript is unavailable.
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const mobile = window.matchMedia('(max-width: 760px)');
function closeMenu() {
  navigation.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = 'Menu';
}
function updateNavigation() {
  menu.hidden = !mobile.matches;
  closeMenu();
}
if (menu && navigation) {
  updateNavigation();
  mobile.addEventListener('change', updateNavigation);
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(expanded));
    menu.textContent = expanded ? 'Close' : 'Menu';
    navigation.classList.toggle('is-open', expanded);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
}
