import axios from "axios";

const custAxios = axios.create({
  baseURL: "http://localhost:8001",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const attachToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.headers.Authorization = `${token}`;
  }
};

export default custAxios;
