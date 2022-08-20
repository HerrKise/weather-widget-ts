<template>
    <div style="display: flex">
        <button
            class="city__button"
            @mousedown="$emit('startdrag')"
            @mouseup="$emit('stopdrag')"
        >
            <b-icon-list class="icon" />
        </button>
        <div style="margin-left: 5px">{{ city.name }}, {{ city.country }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CityWeather } from "@/types/widgetTypes";

export default defineComponent({
    emits: ["startdrag", "stopdrag"],
    props: {
        city: {
            type: Object as PropType<CityWeather>,
            required: true
        }
    }
});
</script>

<style></style>
