const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector("form");
const errorMsg = document.querySelectorAll(".error-msg");
const successIcon = document.querySelectorAll(".success-icon");
const failureIcon = document.querySelectorAll(".failure-icon");

function validateInputs(element) {
  if (element.value.trim() === "") {
    showError(element);
  } else {
    showSuccess(element);
  }
}

function showError(element) {
  console.log("error");
}

function showSuccess(element) {
  console.log("success");
}
