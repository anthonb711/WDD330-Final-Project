import { loadHeaderFooter, getParam} from "./utils.mjs";
import { renderBreachDetail } from "./breachDetail.mjs";

loadHeaderFooter();

const domain = getParam("breach");
renderBreachDetail("detail-div", domain);
