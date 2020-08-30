const appSecret = "5f349c669e654ce89e7e2d56f66fe22a";
const appKey = "kid_BycnOochS";
const domain = `https://baas.kinvey.com`;

function createAuthorization(type) {
  return type === "Basic"
    ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
    : `Kinvey ${sessionStorage.getItem("authtoken")}`;
}
function createHeaders(type, method, data) {
  const headers = {
    method: method,
    headers: {
      Authorization: createAuthorization(type),
      "Content-Type": "application/json",
    },
  };
  if (method === "PUT" || method === "POST") {
    headers.body = JSON.stringify(data);
  }
  return headers;
}

function get(path, endpoint, type) {
  const headers = createHeaders(type, "GET");
  return fetchRequest(path, endpoint, headers);
}
function post(path, endpoint, type, body) {
  const headers = createHeaders(type, "POST", body);
  return fetchRequest(path, endpoint, headers);
}
function put(path, endpoint, type, body) {
  const headers = createHeaders(type, "PUT", body);
  return fetchRequest(path, endpoint, headers);
}
function del(path, endpoint, type) {
  const headers = createHeaders(type, "DELETE");
  return fetchRequest(path, endpoint, headers);
}

function fetchRequest(path, endpoint, headers) {
  const url = `${domain}/${path}/${appKey}/${endpoint}`;
  return fetch(url, headers)
    .then(checkForErrors)
    .then((data) => data.json())
    .catch(console.error);
}
function checkForErrors(req) {
  if (!req.ok) {
    throw new Error(`${req.status} - ${req.statusText}`);
  }
  return req;
}
export { get, post, put, del };
