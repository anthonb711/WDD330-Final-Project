import { setLocalStorage, loadHeaderFooter} from "./utils.mjs";
const baseURL = import.meta.env.EXPOSEDORNOT_SERVER_URL;

 loadHeaderFooter();

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

const domainForm = document.getElementById("getDomainForm");
domainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const domain = domainForm.domain.value
  console.log("This is domain formvalue", domain)
  const chk_status = domainForm.checkValidity();
  domainForm.reportValidity();

  if (chk_status && domain.match(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/)) {
    window.location.href=`../breachDetail/index.html?breach=${domain}`
  } else {
    alert('Please enter a valid domain name.');
  }
});


