import  emailBreachList from "./breach-summary.mjs"
import { getLocalStorage } from "./utils.mjs";

console.log("THIS IS EMAIL BREACH JS");


const email = getLocalStorage("is-email");
emailBreachList("emailBreachList", email)


