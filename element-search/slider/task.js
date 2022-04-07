const leftButton = document.getElementsByClassName('slider__arrow_prev');
const rightButton = document.getElementsByClassName('slider__arrow_next');
const sliderItems = document.getElementsByClassName('slider__item');

let i = 0;

rightButton[0].onclick = function() {
	++i;
	if (i >= sliderItems.length) {
			sliderItems[i-1].classList.remove('slider__item_active');
			sliderItems[i].classList.add('slider__item_active'); 
		
	} else { 
        sliderItems[i-1].classList.remove("slider__item_active");
        sliderItems[i].classList.add("slider__item_active");
    }
}


/* rightButton[0].onclick = function() {
	++i;
	if (i >= sliderItems.length) {
			sliderItems[i-1].classList.remove('slider__item_active');
			sliderItems[i].classList.add('slider__item_active'); 
		
	} else { 
        sliderItems[i-1].classList.remove("slider__item_active");
        
        sliderItems[i].classList.add("slider__item_active");
    }
} */
