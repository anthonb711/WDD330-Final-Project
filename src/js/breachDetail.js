import { loadHeaderFooter, getLocalStorage} from "./utils.mjs";
import { renderBreachDetail } from "./breachDetail.mjs";

loadHeaderFooter();

const domain = getLocalStorage("is-domain");
renderBreachDetail("detail-list", domain);




