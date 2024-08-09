import axios from "axios";
import store from "../utils/index.js";

const token = store.get("token");

export const apiClient  = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {"Authorization": token}
});
