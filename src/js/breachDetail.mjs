import { getBreachMetricsByBreach } from "./external-services.mjs";
import { renderNoBreach, renderWithTemplate, setLocalStorage } from "./utils.mjs";

export async function renderBreachDetail(selector, domain) {
      const listTitle = document.getElementById("list-title");
    listTitle.innerHTML = "";
  if(domain){
  const parentElement = document.getElementById(selector);
  try {
    const breach = await getBreachMetricsByBreach(domain)
    if (!breach){
      document.getElementById("breachCard").innerHTML="";
      renderNoBreach("domain")
    }
    const breachDetail = breach.exposedBreaches[0];
    renderWithTemplate(breachDetailTemplateCard, parentElement, breachDetail)

  }catch (error) {}
} else {
  renderNoBreach("domain")
}
}

function breachDetailTemplateCard(breach) {
  return `<section id="breachCard" class="breachDetail-card">
    <img class="domain-logo" src="https://img.logo.dev/${breach.domain}?token=pk_WbfOaO3vRvO-5UZ_c5_Rwg" />
    <h2>${breach.breachID}</h2>
      <p class="description">${breach.exposureDescription}</p>
      <h3>Breach Stats:</h3>
      <ul class="detailList">
        <li class="detailList">Domain: ${breach.domain}</li>
        <li class="detailList">Date:   ${breach.breachedDate}</li>
        <li class="detailList">Data Exposed: ${breach.exposedData.join(' | ')}</li>
         <li class="detailList">Password Strength: ${breach.passwordRisk}</li>
        <li class="detailList">Expose Records: ${breach.exposedRecords}</li>
      </ul>
  </section>`;
}

const domainForm = document.getElementById("getDomainForm");
domainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const domain = domainForm.domain.value
  console.log("This is domain formvalue", domain)
  const chk_status = domainForm.checkValidity();
  domainForm.reportValidity();

  if (chk_status && domain.match(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/)) {
    setLocalStorage("is-domain", domain)
    renderBreachDetail("detail-list", domain);
  } else {
    alert('Please enter a valid domain name.');
  }
});
