<template>
    <div v-if="cities.length > 0">
        <city-item v-for="city in cities" :key="city.id" :city="city" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CityItem from "../components/CityItem.vue";
import { CityWeather } from "@/types/widgetTypes";

export default defineComponent({
    components: { CityItem },
    props: {
        cities: {
            type: Array as PropType<Array<CityWeather>>,
            required: true
        }
    }
});
</script>

<style></style>
