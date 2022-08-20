const WIDGET_CONFIG: string = "widget-config";
import { CityConfig } from "@/types/widgetTypes";

export function setWidgetConfig(config: Array<CityConfig>): void {
    localStorage.setItem(WIDGET_CONFIG, JSON.stringify(config));
}

export function getWidgetConfig(): Array<CityConfig> {
    return JSON.parse(localStorage.getItem(WIDGET_CONFIG) || "[]");
}
