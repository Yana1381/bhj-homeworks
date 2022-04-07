const activeWindow = document.getElementById("modal_main");
const closeButton = document.getElementsByClassName("modal__close"); 
const successWindow = document.getElementById("modal_success"); 
const successButton = document.getElementsByClassName('show-success');
const changedWindow = document.getElementsByClassName('modal__close');

activeWindow.classList.add('modal_active');

closeButton[0].onclick = function() {
	return activeWindow.classList.remove('modal_active');
}

successButton[0].onclick = function() {
    activeWindow.classList.remove('modal_active');
    return successWindow.classList.add('modal_active');
}

changedWindow[2].onclick = function() {
    return successWindow.classList.remove('modal_active');
}
