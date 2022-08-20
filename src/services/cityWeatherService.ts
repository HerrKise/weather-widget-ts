import httpService from "./httpService";
import configFile from "@/services/config.json";

const cityWeatherEndpoint: string = "data/2.5/weather?";

const cityWeatherService = {
    get: async (lat: number, lon: number) => {
        const { data } = await httpService.get(
            cityWeatherEndpoint +
                `lat=${lat}&lon=${lon}&appid=${configFile.appId}&units=metric`
        );
        return data;
    }
};

export default cityWeatherService;
