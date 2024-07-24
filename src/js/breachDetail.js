import { loadHeaderFooter, getLocalStorage, getParam} from "./utils.mjs";
import { renderBreachDetail } from "./breachDetail.mjs";

loadHeaderFooter();
let domain = getParam("breach");

if (domain == null) {
   domain = getLocalStorage("is-domain");
} else {
  domain = getParam("breach")
}

renderBreachDetail("detail-list", domain);




