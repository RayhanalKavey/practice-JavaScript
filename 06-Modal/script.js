"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelector(".close-modal");

const showModal = document.querySelectorAll(".show-modal");
console.log(showModal, modal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", openModal);
btncloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
