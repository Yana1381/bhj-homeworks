const products = document.getElementsByClassName("product");
const cart = document.getElementsByClassName("cart__products")[0];

function onDec(e) {
  e.preventDefault();
  const prodControls = e.target.closest(".product__quantity-controls");
  const prodQuantityValue = prodControls.querySelector(".product__quantity-value");
  const value = parseInt(prodQuantityValue.textContent);

  if (value > 1) {
    prodQuantityValue.textContent = value - 1;
  }
}

function onInc(e) {
  e.preventDefault();
  const prodControls = e.target.closest(".product__quantity-controls");
  const prodQuantityValue = prodControls.querySelector(".product__quantity-value");
  const value = parseInt(prodQuantityValue.textContent);

  prodQuantityValue.textContent = value + 1;
}

function onAdd(e) {
  e.preventDefault();
  const product = e.target.closest(".product");
  const prodQuantityValue = product.querySelector(".product__quantity-value");
  const prodImg = product.querySelector(".product__image");

  const value = parseInt(prodQuantityValue.textContent);
  const productId = product.dataset.id;
  const imgSrc = prodImg.src;

  const productInCart = cart.querySelector(`[data-id="${productId}"]`);

  if (productInCart) {
    const prodCount = productInCart.querySelector(".cart__product-count");
    const count = parseInt(prodCount.textContent);
    prodCount.textContent = count + value;
  } else {
    cart.insertAdjacentHTML(
      "beforeend",
      `<div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${imgSrc}">
          <div class="cart__product-count">${value}</div>
        </div>`
    );
  }
}

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const prodControlDec = product.querySelector(".product__quantity-control_dec");
  const prodControlInc = product.querySelector(".product__quantity-control_inc");
  const prodAdd = product.querySelector(".product__add");

  prodControlDec.addEventListener("click", onDec);
  prodControlInc.addEventListener("click", onInc);
  prodAdd.addEventListener("click", onAdd);
}
