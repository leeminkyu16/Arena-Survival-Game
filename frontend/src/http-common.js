import axios from "axios";
import databaseConfig from "./config/database.config";

export const mongoDB = axios.create({
  baseURL: databaseConfig.baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
