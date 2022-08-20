import { onMounted, ref } from "vue";
import {
    getWidgetConfig,
    setWidgetConfig
} from "@/services/localStorageService";
import { getCoordinates } from "@/utils/getCoordinates";
import cityConfigService from "@/services/cityConfigService";
import { useWeather } from "./useWeather";
import { CityConfig, CityWeather } from "@/types/widgetTypes";

export function useConfig() {
    const config = ref<Array<CityConfig>>([]);
    const cities = ref<Array<CityWeather>>([]);
    const isCitiesLoading = ref(true);
    const fetching = async () => {
        try {
            if (!getWidgetConfig() || getWidgetConfig().length === 0) {
                const position: any = await getCoordinates();
                const lat: number = position.coords.latitude;
                const lon: number = position.coords.longitude;
                cityConfigService.get(lat, lon).then((data) => {
                    const city: CityConfig = {
                        id: `id${Date.now()}`,
                        country: data[0].country,
                        name: data[0].name,
                        lat: data[0].lat,
                        lon: data[0].lon
                    };
                    config.value.push(city);
                    setWidgetConfig(config.value);
                    for (const city of config.value) {
                        useWeather(city).then((cityWeather) =>
                            cities.value.push(cityWeather)
                        );
                    }
                });
            } else {
                config.value = getWidgetConfig();
                for (const city of config.value) {
                    useWeather(city).then((cityWeather) =>
                        cities.value.push(cityWeather)
                    );
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            isCitiesLoading.value = false;
        }
    };
    onMounted(fetching);
    return {
        config,
        cities,
        isCitiesLoading
    };
}
