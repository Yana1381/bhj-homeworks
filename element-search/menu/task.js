const menuItem = document.getElementsByClassName('menu__item');
const menuLink = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuLink.length; i++) {
	 menuLink[i].onclick = function() {
		if (menuItem[i].querySelector('menu_sub') == true) {
			menuItem[i].classList.add('modal_active');
			//return false;
		}
	}
}