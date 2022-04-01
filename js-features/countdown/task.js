
const timerFunc = function(){
	const timer = document.getElementById("timer");
	timer.textContent -= 1;
	if (timer.textContent == 0) {
		window.alert("Вы победили в конкурсе");
		
	}
}
setInterval(timerFunc, 1000);

let intervalID = setInterval(timerFunc, 1000);

function myStopFunction() {
  clearInterval(intervalID);
}

myStopFunction()


