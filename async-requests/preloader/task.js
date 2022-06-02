const loader = document.getElementById("loader");
const items = document.getElementById("items");

const request = new XMLHttpRequest();
request.open("GET", "https://netology-slow-rest.herokuapp.com");
request.addEventListener("readystatechange", function () {
  if (this.readyState == request.DONE && this.status == 200) {
    const data = JSON.parse(this.responseText);
    const valutes = data.response.Valute;

    let output = "";
    for (let key in valutes) {
      output += `<div class="item">
            <div class="item__code">${valutes[key].CharCode}</div>
            <div class="item__value">${valutes[key].Value}</div>
            <div class="item__currency">руб.</div>
      </div>`;
    }

    loader.classList.toggle("loader_active");
    items.insertAdjacentHTML("beforeend", output);
  }
});
request.send();