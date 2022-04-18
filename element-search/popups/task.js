const activeWindow = document.getElementById("modal_main");
const closeButton = document.getElementsByClassName("modal__close");
const successWindow = document.getElementById("modal_success");

activeWindow.classList.add("modal_active");

for (let i = 0; i < closeButton.length; i++) {
	closeButton[i].onclick = function () {
		let parentWindow = this.closest(".modal");
		if (parentWindow.classList.contains("modal_active") === true) {
			parentWindow.classList.remove("modal_active");
		}

    if (this.classList.contains("show-success") === true) {
		successWindow.classList.add("modal_active");
		}
	};
}