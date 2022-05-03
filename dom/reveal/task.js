
const revealArray = Array.from(document.getElementsByClassName('reveal'));

function scroller() {
	for(let i = 0; i++; i < revealArray.length - 1) {
		elementTop = revealArray[i].getBoundingClientRect().top;
		elementBottom = revealArray[i].getBoundingClientRect().bottom;
		if ((elementTop < window.innerHeight) && (elementBottom > window.innerHeight)) {
			revealArray[i].classList.add('reveal_active');
		}
	}
} 

window.addEventListener('scroll', scroller);





