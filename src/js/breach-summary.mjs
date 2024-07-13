import { getBreachListByEmail, getBreachMetricsByEmail, getBreachMetricsByBreach } from "./external-services.mjs";

import { renderListWithTemplate } from "./utils.mjs"

export default async function emailBreachList(selector, email) {
  const breachDetail = await getBreachMetricsByEmail(email)
  const breachList = breachDetail.ExposedBreaches.breaches_details;
  console.log("b-s.mjs:7 BREACH LIST DETAIL", breachList)
  renderListWithTemplate(emailBreachTemplateCard, selector, breachList);

  //const breachList = await getBreachListByEmail(email)
  //const breachDetail = await getBreachMetricsByBreach("8fit.com") MOVE TO BREACH DETAIL

  //console.log(breachList);
  console.log(breachDetail);
  //console.log(breachDetail);
}


function emailBreachTemplateCard(breach) {
  console.log("B_S: 3 THIS IS TEMPLATE BREACH CARD", breach.domain);
  return `<li class="emailBreach-card">
    <a href="/breach-detail/index.html?breach=${breach.breach}">
<img src="https://img.logo.dev/${breach.domain}?token=pk_WbfOaO3vRvO-5UZ_c5_Rwg" />
      <h3 class="card__brand">${breach.domain}</h3>
</a>
  </li>`;
}