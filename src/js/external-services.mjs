const baseURL = import.meta.env.EXPOSEDORNOT_SERVER_URL;

export async function convertToJson(res) {
  const jsonResponse = await res.json();

  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: "servicesError", message: jsonResponse };
  }
}

export async function getBreachMetricsByEmail(email) {
  try {
    const response = await fetch(`https://api.xposedornot.com/v1/breach-analytics?email=${email}`);
    if(!response.ok) {
      throw new Error(`Request failed with: ${response.status}`)
    }
    const data = await convertToJson(response)
    return data;

  }catch (error) {}
}

export async function getBreachMetricsByBreach(domain) {
  try {
    const response = await fetch(`https://api.xposedornot.com/v1/breaches?domain=${domain}`);
    if(!response.ok){
      throw new Error(`Request failed with: ${response.status}`)
    }
    const result = await response.json();
    return result;

  }catch (error) {}
}

