import { setLocalStorage } from "./utils.mjs";

const baseURL = import.meta.env.EXPOSEDORNOT_SERVER_URL;

const emailForm = document.getElementById("getEmailForm");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailForm.email.value
  const chk_status = emailForm.checkValidity();
  emailForm.reportValidity();

  if (chk_status) {
    setLocalStorage("is-email", email)
    window.location.href="../emailBreachSummary/index.html"
  }
});