
const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");  

function clicker(){
	clicker__counter.textContent = parseInt(clicker__counter.textContent) + 1;
	if(cookie.width == 300) {
	cookie.width = 200;
	}
    else {cookie.width = 300;
	}
}

cookie.addEventListener("click", clicker); 
 
