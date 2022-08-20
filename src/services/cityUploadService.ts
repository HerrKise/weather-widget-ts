import httpService from "./httpService";
import configFile from "@/services/config.json";

const cityUploadEndpoint: string = "geo/1.0/direct?";

const cityUploadService = {
    get: async (cityName: string) => {
        const { data } = await httpService.get(
            cityUploadEndpoint +
                `q=${cityName}&limit=5&appid=${configFile.appId}`
        );
        return data;
    }
};

export default cityUploadService;
