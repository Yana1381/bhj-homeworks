
const subMenu = document.getElementsByClassName('menu_sub');

for (let i = 0; i < subMenu.length; i++) {
	const li = subMenu[i].closest(".menu__item");
	const link = li.querySelector("a");
	if (link !== null) {
		link.onclick = function () {
			const parentLi = this.closest(".menu__item");
			const menuSub = parentLi.querySelector(".menu_sub");
			if (menuSub !== null) {
				if (menuSub.classList.contains("menu_active") === true) {
					menuSub.classList.remove("menu_active");
				} else {
					menuSub.classList.add("menu_active");
				}
			}
			return false;
		}
	}
}


	
	

	
