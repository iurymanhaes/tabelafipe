import axios from "axios";

const api = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros",
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
