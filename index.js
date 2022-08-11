const form = document.getElementById("input__form");
const input = document.getElementById("main__input");
const list = document.getElementById("list__table");
const output = document.getElementById("output__field");

form.addEventListener("submit", (event) => {
  if (input.value.includes("=")) {
    const [name, value] = input.value.split("=");
    const newOption = document.createElement("option");
    newOption.value = value;
    newOption.innerText = input.value;
    list.appendChild(newOption);
    input.value = "";
  }
  event.preventDefault();
});

form.addEventListener("submit", (event) => {
 
    event.preventDefault();
  });