const activeUl = document.querySelector("ul");
const mainDiv = document.querySelector(".dropdown");
const itemsArray = Array.from(document.getElementsByClassName('dropdown__item'));
const itemValue = document.querySelector('.dropdown__value');

function ulClick() {
	if (activeUl.classList.contains("dropdown__list_active") === true) {
		activeUl.classList.remove("dropdown__list_active");
	} else {
			activeUl.classList.add("dropdown__list_active");
		}
}

function itemClick(a) {
    a.preventDefault()
    ulClick();
    itemValue.textContent = this.textContent;
};

for (let item of itemsArray) {
    item.addEventListener('click', itemClick);
};

mainDiv.addEventListener("click", ulClick);
