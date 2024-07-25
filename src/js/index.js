import { setLocalStorage, loadHeaderFooter } from "./utils.mjs";
const baseURL = import.meta.env.EXPOSEDORNOT_SERVER_URL;

loadHeaderFooter();

const emailForm = document.getElementById("getEmailForm");
emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailForm.email.value;
  const chk_status = emailForm.checkValidity();
  emailForm.reportValidity();

  if (chk_status) {
    setLocalStorage("is-email", email);
    window.location.href = "../emailBreachSummary/index.html";
  }
});

const domainForm = document.getElementById("getDomainForm");
domainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const domain = domainForm.domain.value;
  setLocalStorage("is-domain", domain);

  const chk_status = domainForm.checkValidity();
  domainForm.reportValidity();

  if (chk_status && domain.match(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/)) {
    window.location.href = `../breachDetail/index.html?breach=${domain}`;
  } else {
    alert("Please enter a valid domain name.");
  }
});

const mediaQuery = window.matchMedia("(max-width: 899px)");
const intro = document.getElementById("intro-text");

function handleMediaQueryChange(event) {
  if (event.matches) {
    intro.innerHTML =
      "<p>At <strong> IdentiSafe</strong>, our mission is to keep you informed. We handle the heavy lifiting and sift through thousands of breachs and provide you with the details of your personalized exposure risk. You can check your email address against our comprehensive breach database, or check to see if a website has experienced a breach. Knowing your exposure is the first step in protecting your data. Check your exposure now!</p>";
  } else {
    intro.innerHTML =
      "<p>It seems every month we read of the newest data breach. As we live more and more online we are increasing our risk to our own personal data being caught up in the next breach. When thousands of records are exposed can be nearly impossible for you to know if your personal data has been comprimised. Thats where <strong>IdentiSafe</strong> comes in!</p>" +
      "<p>Our mission is to keep you informed. We handle the heavy lifiting and sift through thousands of breachs and provide you with the details of your personalized exposure risk. You can check your email address against our comprehensive breach database, or check to see if a website has experienced a breach. Knowing your exposure is the first step in protecting your data. Check your exposure now!</p>";
  }
}

handleMediaQueryChange(mediaQuery);

mediaQuery.addEventListener("change", handleMediaQueryChange);
