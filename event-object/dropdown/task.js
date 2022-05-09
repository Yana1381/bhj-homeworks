const activeUl = document.querySelector("ul");
const mainDiv = document.querySelector(".dropdown");
const itemsArray = Array.from(document.getElementsByClassName('dropdown__item'));
const itemValue = document.querySelector('.dropdown__value');

function ulClick() {
	activeUl.classList.toggle("dropdown__list_active");
}

function itemClick(a) {
    a.preventDefault()
    ulClick();
    itemValue.textContent = this.textContent;
};

itemValue.addEventListener("click", ulClick);

for (let item of itemsArray) {
    item.addEventListener('click', itemClick);
};



