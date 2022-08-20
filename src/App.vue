<template>
    <div class="widget">
        <button @click="toggleSettings" class="settings__btn">
            <b-icon-x-lg type="button" class="icon" v-if="settingsVisible" />
            <b-icon-gear type="button" class="icon" v-else />
        </button>
        <div v-if="!isCitiesLoading">
            <div class="widget__settings" v-if="settingsVisible">
                <Settings
                    @create="createCity"
                    :cities="cities"
                    @remove="removeCity"
                    @reorder="reorderCities"
                />
            </div>
            <div v-else><Main :cities="cities" /></div>
        </div>
    </div>
</template>

<script lang="ts">
import Settings from "./Tabs/Settings.vue";
import Main from "./Tabs/Main.vue";
import { useConfig } from "./hooks/useConfig";
import { setWidgetConfig } from "./services/localStorageService";
import { useWeather } from "./hooks/useWeather";
import { defineComponent } from "vue";
import { CityConfig } from "@/types/widgetTypes";
export default defineComponent({
    data() {
        return {
            settingsVisible: false,
            searchQuery: ""
        };
    },
    setup() {
        const { cities, config, isCitiesLoading } = useConfig();
        return {
            cities,
            config,
            isCitiesLoading
        };
    },
    methods: {
        toggleSettings() {
            this.settingsVisible = !this.settingsVisible;
        },
        async createCity(city: CityConfig) {
            this.config.push(city);
            setWidgetConfig(this.config);
            await useWeather(city).then((data) => this.cities.push(data));
        },
        removeCity(city: CityConfig) {
            this.config = this.config.filter((c) => c.id !== city.id);
            setWidgetConfig(this.config);
            this.cities = this.cities.filter((c) => c.id !== city.id);
        },
        reorderCities(activeCity: string, targetCity: string) {
            const from = this.cities.indexOf(
                this.cities.find((city) => city.id === activeCity)!
            );
            const to = this.cities.indexOf(
                this.cities.find((city) => city.id === targetCity)!
            );
            this.cities.splice(to, 0, this.cities.splice(from, 1)[0]);
            this.config.splice(to, 0, this.config.splice(from, 1)[0]);
            setWidgetConfig(this.config);
        }
    },
    components: { Settings, Main }
});
</script>

<style lang="scss">
%btn {
    display: flex;
    border: none;
    background: inherit;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    max-width: 240px;
    min-height: 300px;
}
.icon {
    width: 100%;
    height: 100%;
}
.widget {
    position: relative;
    width: 240px;
    min-height: 300px;
    border: 2px solid black;
    padding: 10px;
    background: white;
}
.settings__btn {
    @extend %btn;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
}
</style>
