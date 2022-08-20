export function getWindDirection(degrees: number): string {
    let direction: string = "";
    if ((degrees > 348.75 && degrees <= 360) || degrees <= 11.25) {
        direction = "N";
    } else if (degrees > 11.25 && degrees <= 33.75) {
        direction = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        direction = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        direction = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        direction = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        direction = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        direction = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        direction = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        direction = "S";
    } else if (degrees > 191.25 && degrees <= 213.75) {
        direction = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25) {
        direction = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        direction = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        direction = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        direction = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        direction = "NW";
    } else if (degrees > 326.25 && degrees <= 348.75) {
        direction = "NNW";
    }
    return direction;
}
