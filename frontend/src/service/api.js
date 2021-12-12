import axios from "axios";

const api = axios.create({
 baseURL: "http://150.230.29.0:4000",
});

export default api;