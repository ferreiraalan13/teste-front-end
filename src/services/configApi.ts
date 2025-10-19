import axios from "axios";

export const configApi = axios.create({
  baseURL: "https://app.econverse.com.br/",
});
