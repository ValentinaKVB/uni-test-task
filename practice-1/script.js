const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const openButton = document.querySelector(".open-btn");
const closeModal = document.querySelector(".modal-content > .close-icon");
const discardLogo  = document.querySelector(".file > .close-icon");
const fileInput = document.querySelector("input[type=\"file\"]");
console.log(fileInput.accept);
const customFileInput = document.querySelector(".file a");
const filePreview = document.querySelector(".file");


openButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
})

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
})

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
})

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
})

customFileInput.addEventListener("click", (event) => {
  event.preventDefault();
  fileInput.click();
})

fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  const fileURL = URL.createObjectURL(files[0]);
  if (files[0]) {
    filePreview.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), center/cover no-repeat url("${fileURL}")`;
  }
})

discardLogo.addEventListener("click", () => {
  filePreview.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), center/cover no-repeat url("images/photo.png")`;
})