import axios from "axios";

const base = process.env.REACT_APP_API_BASE;

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  timeout: +process?.env?.REACT_APP_API_TIMEOUT! ?? 5000,
});

const apiDef = {
  getBalanceTransaction() {
    return http.get(`${base}/GetBalanceTransaction`);
  },
};

export default apiDef;
