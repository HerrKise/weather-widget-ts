import configFile from "@/services/config.json";
import axios from "axios";

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

const httpService = {
    get: http.get
};

export default httpService;
