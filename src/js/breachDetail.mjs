import { getBreachMetricsByBreach } from "./external-services.mjs";
import { formatRisk, renderNoBreach, formatDate,
        renderWithTemplate, setLocalStorage } from "./utils.mjs";

export async function renderBreachDetail(selector, domain) {

  const listTitle = document.getElementById("list-title");
  listTitle.innerHTML = "";

  if(domain){
    const parentElement = document.getElementById(selector);
    try {
      const breach = await getBreachMetricsByBreach(domain)

    if (breach.status == "notFound") {
      parentElement.innerHTML="";
      renderNoBreach("domain")
    }
    const breachDetail = breach.exposedBreaches[0];
    renderWithTemplate(breachDetailTemplateCard, parentElement, breachDetail)
    } catch (error) {console.error(error)}
  } else {
    renderNoBreach("domain")
  }
}

function breachDetailTemplateCard(breach) {
  const risk = formatRisk(breach.passwordRisk);
  const breachDate = formatDate(breach.breachedDate)
 
  return `<li id="detail-card" class="breachDetail-card">
    <img class="domain-logo" src="https://img.logo.dev/${breach.domain}?token=pk_WbfOaO3vRvO-5UZ_c5_Rwg" />
    <h2 id="breachID">${breach.breachID}</h2>
      <p class="description">${breach.exposureDescription}</p>
      <h3 id="stats">Breach Stats:</h3>
      <ul class="detailList">
        <li class="detailList"><strong>Domain:</strong> ${breach.domain}</li>
        <li class="detailList"><strong>Date:</strong>   ${breachDate}</li>
        <li class="detailList"><strong>Data Exposed:</strong> ${breach.exposedData.join(' | ')}</li>
         <li class="detailList"><strong>Password Strength:</strong> ${risk}
        <li class="detailList"><strong>Expose Records:</strong> ${new Intl.NumberFormat("en-IN").format(breach.exposedRecords)}</li>
      </ul>
  </li>`;
}

const domainForm = document.getElementById("domain-domain-form");
domainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const domain = domainForm.domain.value

  const chk_status = domainForm.checkValidity();
  domainForm.reportValidity();


  if (chk_status && domain.match(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/)) {
    setLocalStorage("is-domain", domain)
    renderBreachDetail("domain-detail-list", domain);
  } else {
    alert('Please enter a valid domain name.');
  }
});


