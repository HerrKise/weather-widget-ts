export function getWindName(speed: number): string {
    let name: string = "";
    if (speed <= 1) {
        name = "Calm";
    } else if (speed > 1 && speed <= 2) {
        name = "Light Air";
    } else if (speed > 2 && speed <= 3) {
        name = "Light breeze";
    } else if (speed > 3 && speed <= 4) {
        name = "Gentle breeze";
    } else if (speed > 4 && speed <= 5) {
        name = "Moderate breeze";
    } else if (speed > 5 && speed <= 6) {
        name = "Fresh breeze";
    } else if (speed > 6 && speed <= 7) {
        name = "Strong breeze";
    } else if (speed > 7 && speed <= 8) {
        name = "Moderate gale";
    } else if (speed > 8 && speed <= 9) {
        name = "Fresh gale";
    } else if (speed > 9 && speed <= 10) {
        name = "Strong gale";
    } else if (speed > 10 && speed <= 11) {
        name = "Storm";
    } else if (speed > 11 && speed <= 12) {
        name = "Violent storm";
    } else {
        name = "Hurricane";
    }
    return name;
}
