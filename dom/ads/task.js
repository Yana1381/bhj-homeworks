const arrRotator = Array.from(document.getElementsByClassName('rotator__case'));

function adsRotator() {
	let index = 0;
	setInterval(() => {
		arrRotator.forEach((e) => {
			if (e.classList.contains('rotator__case_active')) {
					e.classList.remove('rotator__case_active');
			};
		});
		if (index < arrRotator.length - 1) {
			index++
		} else {
			index = 0;
		}
		arrRotator[index].classList.add('rotator__case_active');
	}, 1000);
}

adsRotator();