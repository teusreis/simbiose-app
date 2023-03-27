import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACK_END_BASE_URL,
    headers: { Accept: "application/json" },
});

export default api;
