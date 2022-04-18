const leftButton = document.getElementsByClassName("slider__arrow_prev");
const rightButton = document.getElementsByClassName("slider__arrow_next");
const sliderItems = Array.from(document.getElementsByClassName("slider__item"));

function activeSlide(element, index, array) {
  return element.classList.contains("slider__item_active");
}

rightButton[0].onclick = function () {
  let i = sliderItems.findIndex(activeSlide);
  sliderItems[i].classList.remove("slider__item_active");

  const firstIndex = 0;
  const lastIndex = sliderItems.length - 1;
  i = i === lastIndex ? firstIndex : i + 1;
  sliderItems[i].classList.add("slider__item_active");
};

leftButton[0].onclick = function () {
  let i = sliderItems.findIndex(activeSlide);
  sliderItems[i].classList.remove("slider__item_active");

  const firstIndex = 0;
  const lastIndex = sliderItems.length - 1;
  i = i === firstIndex ? lastIndex : i - 1;
  sliderItems[i].classList.add("slider__item_active");
};