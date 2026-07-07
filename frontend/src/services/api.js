import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-resume-matcher-luup.onrender.com",
});

export default api;