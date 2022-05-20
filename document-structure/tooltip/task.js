const ArrayToolTips = Array.from(document.getElementsByClassName("has-tooltip"));
const tipDiv = document.createElement("div");

tipDiv.classList.add('tooltip');

for (let i = 0; i < ArrayToolTips.length; i++) {
	ArrayToolTips[i].insertAdjacentHTML("afterEnd",tipDiv);
};

function Click(e) {
	e.preventDefault();
	tipDiv.classList.toggle('tooltip_active');
}

for (let index of ArrayToolTips) {
    index.addEventListener('click', Click);
};