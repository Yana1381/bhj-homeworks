
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
	let onHole = document.getElementById(`hole${index}`)
	return onHole;
	}

for (let index = 1; index <= 9; index++) {
	let hole = getHole(index);
	hole.onclick = function() {
		if (hole.className.includes("hole_has-mole") === true) {
			dead.textContent = parseInt(dead.textContent) + 1;
		} else {
			lost.textContent = parseInt(lost.textContent) + 1;
		}
		
		if (dead.textContent >= 10) {
			alert ("Вы победили!");
			dead.textContent = 0;
			lost.textContent = 0;
		} else if (lost.textContent >= 5) {
			alert ("Вы проиграли");
			dead.textContent = 0;
			lost.textContent = 0;
		}
	}
}



	






//dead.addEventListener("click", clicker);
//lost.addEventListener("click", clicker);