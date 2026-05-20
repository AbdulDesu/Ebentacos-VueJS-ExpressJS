import axios from "axios";

window.axios = axios
axios.defaults.withCredentials = false
// axios.defaults.baseURL = "http://localhost:8081/api"
let backendUrl = "https://api-abentacos.abdulrichard.site/api"
axios.defaults.baseURL = backendUrl
