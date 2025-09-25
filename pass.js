let count = 0;

function increament() {
  count = count + 1;

  if (count === 10) {
    console.log("you win");
  }

  document.querySelector(".count").innerHTML = ` ${count}`;

  console.log("button was clicked");
}
function saveData() {
  let saveButtonElement = document.querySelector(".save-btn");
  let data = count + " -  ";

  saveButtonElement.innerHTML += data;
}
