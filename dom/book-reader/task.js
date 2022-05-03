const bookCont = document.querySelector('.book__content');
const fontSizeArray = Array.from(document.getElementsByClassName('font-size'));

function sizeChange(event) {
    event.preventDefault();
    fontSizeArray.forEach((e) => {
        if (e.classList.contains('font-size_active')) {
            e.classList.remove('font-size_active');
            bookCont.classList.remove('font-size_small');
            bookCont.classList.remove('font-size_big');
        };
    });
	
    if (this.classList.contains('font-size_small')) {
        this.classList.add('font-size_active');
        bookCont.classList.add('font-size_small');
    } else if (this.classList.contains('font-size_big')) {
        this.classList.add('font-size_active');
        bookCont.classList.add('font-size_big');
    } else if (!this.classList.contains('font-size_big') && !this.classList.contains('font-size_small')) {
        this.classList.add('font-size_active');
    };
};

fontSizeArray.forEach((e) => {
    e.addEventListener('click', sizeChange);
});