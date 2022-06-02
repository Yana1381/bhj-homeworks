const progress = document.getElementById("progress");

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  const formData = new FormData(form);

  const request = new XMLHttpRequest();
  request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  request.upload.onprogress = function (e) {
    progress.value = e.loaded / e.total;
  };
  request.send(formData);

  e.preventDefault();
});