import * as appConfig from "../appConfig";

export function get(endpoint) {
  return fetch(`${appConfig.BASE_URL}${endpoint}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}
