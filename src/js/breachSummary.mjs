import {  getBreachMetricsByEmail } from "./external-services.mjs";
import { renderListWithTemplate, renderNoBreach, setLocalStorage } from "./utils.mjs"

export default async function emailBreachList(selector, email) {
  try {
    const breachDetail = await getBreachMetricsByEmail(email)
    const breachList = breachDetail.ExposedBreaches.breaches_details;
    renderListWithTemplate(emailBreachTemplateCard, selector, breachList);
  }catch (error) {
  console.log("NO BREACH FOUND");
    renderNoBreach(email);
  }
}


function emailBreachTemplateCard(breach) {
  console.log("B_S: 3 THIS IS TEMPLATE BREACH CARD", breach.domain);
  return `<li class="emailBreach-card">
    <a href="/breachDetail/index.html?breach=${breach.domain}">
<img src="https://img.logo.dev/${breach.domain}?token=pk_WbfOaO3vRvO-5UZ_c5_Rwg" />
      <h3 class="card__brand">${breach.domain}</h3>
</a>
  </li>`;
}