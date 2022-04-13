const menuItem = document.getElementsByClassName('menu__item');
const menuLink = document.getElementsByClassName('menu__link');
const subMenu = document.getElementsByClassName('menu_sub');
const LinkArr = Array.from(menuLink);



for (let i = 0; i < subMenu.length; i++){
		if (subMenu[i].closest(.menu__link) !== null){
			return parentSubEl.querySelector(.menu__link);
		}
}


	
	
/*  for (let i = 0; i < menuLink.length; i++) {
	 
	 menuLink[i].onclick = function() {
		//let parentLink = menuLink.closest(".menu__link");
			if (menuItem[i].querySelector('.menu_sub') !== null && parentLink[i].classList.contain('menu__link')) {
			
		}
	}
} */
	
	
