 
const revealArray = Array.from(document.getElementsByClassName('reveal'));

window.addEventListener('scroll', scroller);

function scroller() {
    revealArray.forEach((e) => {
        if (e.getBoundingClientRect().y < window.innerHeight && e.getBoundingClientRect().y > 0) {
            e.classList.add('reveal_active');
        } else {
			e.classList.remove('reveal_active');
		}
    })
}

/* function scroller() {
	for (let i = 0; i++; i < revealArray.length - 1) {
		let elementTop = revealArray[i].getBoundingClientRect().top;
		let elementBottom = revealArray[i].getBoundingClientRect().bottom;
		if ((elementTop < window.innerHeight) && (elementBottom > window.innerHeight)) {
			revealArray[i].classList.add('reveal_active');
		}  
	}
} 
 */ 