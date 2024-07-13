const baseURL = import.meta.env.EXPOSEDORNOT_SERVER_URL;

export async function convertToJson(res) {
  const jsonResponse = await res.json();

  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: "servicesError", message: jsonResponse };
  }
}

export async function getBreachListByEmail(email) {
const response = await fetch(`https://api.xposedornot.com/v1/check-email/${email}`);
const result = await response.json();

return result.breaches[0];
}

export async function getBreachMetricsByEmail(email) {
  const response = await fetch(`https://api.xposedornot.com/v1/breach-analytics?email=${email}`);
  const data = await convertToJson(response)

  return data;
}

export async function getBreachMetricsByBreach(domain) {
  const response = await fetch(`https://api.xposedornot.com/v1/breaches?domain=${domain}`);
  const result = await response.json();

  return result;
}

