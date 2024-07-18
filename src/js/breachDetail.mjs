import { getBreachMetricsByBreach } from "./external-services.mjs";
import { renderWithTemplate } from "./utils.mjs";

export async function renderBreachDetail(selector, domain) {

  try {
    const breach = await getBreachMetricsByBreach(domain)
    if (!breach){
      window.location.href="../index.html"
    }
    const breachDetail = breach.exposedBreaches[0];
    console.log("THIS IS DOMAIN BREACH DETAIL", breachDetail); //TODO: REMOVE
    const parentElement = document.getElementById(selector);

    renderWithTemplate(breachDetailTemplateCard, parentElement, breachDetail)

  }catch (error) {}
}

function breachDetailTemplateCard(breach) {
  console.log("B_S: 3 THIS IS TEMPLATE BREACH CARD", breach.exposureDescription); // TODO: REMOVE
  //const exposedData = getExposedDataArr(breach);
  return `<section class="breachDetail-card">
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
//<img src="https://img.logo.dev/${breach.domain}?token=pk_WbfOaO3vRvO-5UZ_c5_Rwg" />