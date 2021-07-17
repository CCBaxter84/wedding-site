import axios from "axios";

const http = axios.create({
    baseURL: "/.netlify/functions/"
});

export default http;