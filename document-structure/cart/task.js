const prodControlDec = document.getElementsByClassName('product__quantity-control_dec');
const prodControlInc = document.getElementsByClassName('product__quantity-control_inc');
const prodQuantityControl = document.getElementsByClassName('product__quantity-controls');

for (let i = 0; i < prodQuantityControl.length; i++) {

    prodControlDec[i].addEventListener('click', () => {
        if (prodControlDec[i].nextElementSibling.querySelector('.product__quantity-value').textContent > 1) {
            prodControlDec[i].nextElementSibling.querySelector('.product__quantity-value').textContent -= 1;
        };
    });

    prodControlInc[i].addEventListener('click', () => {
        if (prodControlInc[i].previousElementSibling.querySelector('.product__quantity-value').textContent > 0) {
            prodControlInc[i].previousElementSibling.querySelector('.product__quantity-value').textContent;
        };
    });

};