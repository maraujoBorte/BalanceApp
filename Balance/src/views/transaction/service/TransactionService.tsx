import axios from "axios";
import { Transaction } from "../../../contexts/Transaction";

const base = process.env.REACT_APP_API_BASE;

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  timeout: +process?.env?.REACT_APP_API_TIMEOUT! ?? 5000,
});

const apiDef = {
  getByIdTransaction(id: number) {
    return http.get(`${base}?Id=${id}`);
  },
  insertTransaction(data: Transaction) {
    return http.post(`${base}`, data);
  },
  updateTransaction(data: Transaction) {
    return http.put(`${base}`, data);
  },
  deleteTransaction(id: number) {
    return http.delete(`${base}?Id=${id}`);
  },
};

export default apiDef;
