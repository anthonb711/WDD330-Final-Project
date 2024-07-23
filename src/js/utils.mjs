

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
  const listTitle = document.getElementById("list-title");
  const email = getLocalStorage("is-email")
  listTitle.innerHTML = '<h2>' + email + '</h2>' + ' has been exposed in the following breaches';
  document
    .getElementById(parentElement)
    .insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderNoBreach(type) {
  const breachlist = document.getElementById("detail-list");
  breachlist.innerHTML = ""

    const breachTitle = document.getElementById("list-title");
  breachTitle.innerHTML = ""

  const breachType = getLocalStorage(`is-${type}`);
  const listTilte = document.getElementById("list-title");
  listTilte.innerHTML = ""
  if(breachType) {
    listTilte.innerHTML = '<h2>' + breachType + ' is secure!' + '</br></br>' + 'Check another ' + type +'!';
  } else {
    listTilte.innerText='Check another ' + type + ' now!';
  }
}

function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  };
}

export async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  // get template using function...no need to loop this time.
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = await templateFn(data);
  parentElement.insertAdjacentHTML(position, htmlString);

  if (callback) {
    callback(data);
  }
}

export function loadHeaderFooter() {

  const headerTemplateFN = loadTemplate("/partials/header.html");
  const footerTemplateFN = loadTemplate("/partials/footer.html");

  const headerEl = document.getElementById("header");
  const footerEl = document.getElementById("footer");

  renderWithTemplate(headerTemplateFN, headerEl);
  renderWithTemplate(footerTemplateFN, footerEl);
}
