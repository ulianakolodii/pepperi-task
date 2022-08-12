const formEl = document.getElementById("input__form");
const input = document.getElementById("main__input");
const listEl = document.getElementById("list__table");
const output = document.getElementById("output__field");
const deleteButtonEl = document.getElementById("delete__button");
const sortByNameEl = document.getElementById("sort-by-name__button");
const sortByValueEl = document.getElementById("sort-by-value__button");
const convertXMLEl = document.getElementById("xml__button");

const remove = () => {
  Array.from(listEl.selectedOptions).forEach((option) => {
    option.remove();
  });
};

const submit = (event) => {
  const [name, value] = input.value.split("=");
  if (name && value) {
    const newOption = document.createElement("option");
    newOption.value = value;
    newOption.innerText = input.value;
    newOption.dataset.name = name;
    listEl.appendChild(newOption);
    input.value = "";
  }
  event.preventDefault();
  document.getElementById("main__input").select();
};

const sortByName = () => {
  const options = Array.from(listEl.options);
  const sortedOptions = options.sort((a, b) =>
    a.dataset.name.localeCompare(b.dataset.name)
  );
  listEl.innerHTML = "";
  sortedOptions.forEach((option) => {
    listEl.options.add(option);
  });
};
const sortByValue = () => {
  const options = Array.from(listEl.options);
  const sortedOptions = options.sort((a, b) => a.value.localeCompare(b.value));
  listEl.innerHTML = "";
  sortedOptions.forEach((option) => {
    listEl.options.add(option);
  });
};

const convertXML = () => {
  alert(new XMLSerializer().serializeToString(listEl));
};

formEl.addEventListener("submit", submit);
deleteButtonEl.addEventListener("click", remove);
sortByNameEl.addEventListener("click", sortByName);
sortByValueEl.addEventListener("click", sortByValue);
convertXMLEl.addEventListener("click", convertXML);
