import  emailBreachList from "./breachSummary.mjs"
import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";


loadHeaderFooter();

const email = getLocalStorage("is-email");
emailBreachList("detail-list", email)



