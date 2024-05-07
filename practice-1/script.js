const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const openButton = document.querySelector(".open-btn");
const closeModal = document.querySelector(".modal-content > .close-icon");
const discardLogo = document.querySelector(".file > .close-icon");
const submitForm = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");
const fileContainer = document.querySelector(".input-group:nth-child(2)");
const filePreview = document.querySelector(".file");
const customFileInput = document.querySelector(".file a");
const fileInput = document.querySelector("input[type=\"file\"]");


// Валидация для поля выбора файла
const fileTypes = ["image/jpeg", "image/png"];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

// Открытие модального окна 
openButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
})

// Закрытие модального окна
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
})

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
})

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
})

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("hidden");
})

// Настройка поля выбора файла
customFileInput.addEventListener("click", (event) => {
  event.preventDefault();
  fileInput.click();
})

fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  const fileURL = URL.createObjectURL(files[0]);


  if (validFileType(files[0])) {

    if (fileContainer.lastChild.localName === "p") {
      fileContainer.lastChild.remove();

      submitForm.removeAttribute("disabled");
      submitForm.style.cursor = "";
      submitForm.style.backgroundColor = "";
    }

    filePreview.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), center/cover no-repeat url("${fileURL}")`;
  } else {
    const warning = document.createElement("p");
    warning.textContent = "Выберите файл подходящего формата";
    fileContainer.appendChild(warning);
    warning.style.color = "red";
    warning.style.textAlign = "center";
    warning.style.width = "165px";

    submitForm.setAttribute("disabled", "");
    submitForm.style.backgroundColor = "gray";
    submitForm.style.cursor = "not-allowed";
  }

})

discardLogo.addEventListener("click", () => {
  filePreview.style.background = "";
})

