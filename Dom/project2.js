function inputUpdate() {
  let inputElement = document.querySelector(".input-btn");
  let name = inputElement.value;
  console.log(name);

  document.querySelector(".enter-details").innerHTML = `${name}`;
}
