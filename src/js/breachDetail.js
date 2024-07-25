import { loadHeaderFooter, getLocalStorage, getParam } from "./utils.mjs";
import { renderBreachDetail } from "./breachDetail.mjs";

loadHeaderFooter();
let domain = getParam("breach");

// Allow for last input domain load from local storage
// or allows the domain to load from the email summary link which uses the url params
if (domain == null) {
  domain = getLocalStorage("is-domain");
} else {
  domain = getParam("breach");
}

renderBreachDetail("domain-detail-list", domain);
