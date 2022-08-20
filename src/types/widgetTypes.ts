export interface CityConfig {
    id: string;
    country: string;
    name: string;
    lat: number;
    lon: number;
}

export interface CityWeather {
    id: string;
    country: string;
    name: string;
    icon: string;
    temp: number;
    feels_like: number;
    description: string;
    wind_name: string;
    wind_speed: number;
    wind_direction: string;
    pressure: number;
    humidity: number;
    visibility: number;
}
