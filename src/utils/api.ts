import axios from "axios";

export const api = axios.create({
  baseURL: "https://miles-tools-server.onrender.com",
});
