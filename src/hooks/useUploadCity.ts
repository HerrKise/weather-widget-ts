import cityUploadService from "@/services/cityUploadService";
import { CityConfig } from "@/types/widgetTypes";

export async function useUploadCity(
    searchQuery: string
): Promise<CityConfig | string | undefined> {
    let city;
    await cityUploadService.get(searchQuery).then((data) => {
        if (data.length === 0) {
            city = "Please, enter correct name";
        } else {
            city = {
                id: `id${Date.now()}`,
                name: data[0].name,
                country: data[0].country,
                lat: data[0].lat,
                lon: data[0].lon
            };
        }
    });
    return city;
}
