const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

function onClick(e) {
  e.preventDefault();
  alert("Спасибо, ваш голос засчитан!");
}

const request = new XMLHttpRequest();
request.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
request.addEventListener("readystatechange", function () {
  if (this.readyState == request.DONE && this.status == 200) {
    const data = JSON.parse(this.responseText);
    const pollData = data.data;

    const answers = pollData.answers;
    let output = "";
    for (let i = 0; i < answers.length; i++) {
      output += `<button class="poll__answer">
        ${answers[i]}
      </button>`;
    }

    pollTitle.textContent = pollData.title;
    pollAnswers.insertAdjacentHTML("beforeend", output);

    const buttons = Array.from(pollAnswers.getElementsByClassName("poll__answer"));
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", onClick);
    }
  }
});
request.send();