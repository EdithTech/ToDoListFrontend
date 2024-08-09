import axios from "axios";
import store from "../utils/index.js";

const token = store.get("token");

// console.log("apiclient ", process.env.REACT_APP_BACKEND_URL);

export const apiClient  = axios.create({
    baseURL: "https://to-do-list-backend-five.vercel.app",
    // baseURL: "http://localhost:3000",
    headers: {"Authorization": token}
});
