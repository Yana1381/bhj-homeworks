const arrayToolTips = Array.from(
  document.getElementsByClassName("has-tooltip")
);
const tipDiv = document.createElement("div");

tipDiv.classList.add("tooltip");
document.body.appendChild(tipDiv);

function click(e) {
  e.preventDefault();
  const target = e.target;

  tipDiv.innerText = target.title;

  tipDiv.style.left = target.offsetLeft + "px";
  tipDiv.style.top = target.offsetTop + target.offsetHeight + "px";

  tipDiv.classList.toggle("tooltip_active");
}

for (let index of arrayToolTips) {
  index.addEventListener("click", click);
}