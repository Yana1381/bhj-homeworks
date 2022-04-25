const activeUl = document.querySelector("ul");

function ulClick() {
	if (activeUl.classList.contains("dropdown__list_active") === true) {
		activeUl.classList.remove("dropdown__list_active");
		} else {
			activeUl.classList.add("dropdown__list_active");
		}
}

activeUl.addEventListener("click", ulClick);

//let paragraph = document.querySelector('p');
//console.log(paragraph.textContent);