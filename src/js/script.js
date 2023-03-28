import "bootstrap";
import Popper from "popper.js";

function showToast() {
  var toast = document.getElementById("toast");
  var toastBody = document.getElementById("toast-body");
  toast.classList.add("show");
  toastBody.innerText = "This functionality is currently unavailable";
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}
