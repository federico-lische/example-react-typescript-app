import axios from "axios"

const apiURL = "https://jsonplaceholder.typicode.com";

/**
 * Axios instance configured with default settings.
 * 
 * This instance is created using the `axios.create` method and is configured with:
 * - `baseURL`: The base URL for all HTTP requests, defined by the `apiURL` variable.
 * - `headers`: Default headers for all HTTP requests, including:
 *   - `Content-Type`: Set to `application/json` to indicate that the request body format is JSON.
 * 
 * @constant
 * @type {AxiosInstance}
 */
const axiosConfig = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  }
})

export default axiosConfig;
