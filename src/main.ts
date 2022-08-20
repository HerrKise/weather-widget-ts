import { createApp } from "vue";
import App from "./App.vue";
import {
    BIconList,
    BIconGear,
    BIconXLg,
    BIconTrash,
    BIconArrowReturnLeft
} from "bootstrap-icons-vue";

createApp(App)
    .component("BIconList", BIconList)
    .component("BIconGear", BIconGear)
    .component("BIconXLg", BIconXLg)
    .component("BIconTrash", BIconTrash)
    .component("BIconArrowReturnLeft", BIconArrowReturnLeft)
    .mount("#app");
