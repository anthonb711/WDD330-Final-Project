

//URL Params
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  const htmlStrings = list.map((item) => templateFn(item));
  //const filter = filterProducts(htmlStrings);
  
  const listTitle = document.getElementById("list-title");
 const email = getLocalStorage("is-email")
  listTitle.innerHTML = '<h2>' + email + '</h2>' + ' has been exposed in the following breaches';
  document
    .getElementById(parentElement)
    .insertAdjacentHTML(position, htmlStrings.join(""));
}

// export function filterProducts(products, limit = 4) {
//   return products.slice(0, limit);
// }