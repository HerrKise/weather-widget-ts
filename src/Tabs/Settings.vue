<template>
    <div class="settings__header">
        <h2>Settings</h2>
    </div>

    <div
        v-for="city in cities"
        class="city__settings"
        :key="city.id"
        :id="city.id"
        :draggable="draggable"
        @dragenter.prevent
        @dragover.prevent
        @drop.prevent="toDrop($event, city.id)"
        @dragstart="onDragStart($event, city.id)"
    >
        <city-bar-item
            :city="city"
            @startdrag="enableDraggable"
            @stopdrag="disableDraggable"
        />
        <button @click="$emit('remove', city)" class="city__button">
            <b-icon-trash class="icon" />
        </button>
    </div>

    <input-bar v-model="searchQuery" @upload="upload" />
    <div
        v-if="errorMessage.length !== 0 && searchQuery.length === 0"
        style="color: red"
    >
        {{ errorMessage }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useUploadCity } from "../hooks/useUploadCity";
import { CityWeather } from "@/types/widgetTypes";
import CityBarItem from "@/components/CityBarItem.vue";
import InputBar from "@/components/InputBar.vue";

export default defineComponent({
    components: { CityBarItem, InputBar },
    props: {
        cities: {
            type: Array as PropType<Array<CityWeather>>,
            required: true
        }
    },
    emits: ["reorder", "create", "remove"],
    data() {
        return {
            searchQuery: "",
            draggable: false,
            errorMessage: ""
        };
    },
    methods: {
        onDragStart(e: DragEvent, itemId: string) {
            e.dataTransfer!.dropEffect = "move";
            e.dataTransfer!.effectAllowed = "move";
            e.dataTransfer!.setData("itemId", itemId);
        },
        toDrop(e: DragEvent, zoneId: string) {
            const itemId = e.dataTransfer!.getData("itemId");
            if (itemId !== zoneId) {
                this.$emit("reorder", itemId, zoneId);
            }
            this.draggable = false;
        },
        enableDraggable(): void {
            this.draggable = true;
        },
        disableDraggable(): void {
            this.draggable = false;
        },
        async upload() {
            this.errorMessage = "";
            await useUploadCity(this.searchQuery)
                .then((data) => {
                    if (typeof data === "string") {
                        throw data;
                    }
                    this.$emit("create", data);
                })
                .catch((error: string) => {
                    this.errorMessage = error;
                })
                .finally(() => (this.searchQuery = ""));
        }
    }
});
</script>

<style lang="scss">
.settings__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.city__settings {
    display: flex;
    align-items: center;
    background: lightgray;
    height: 40px;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 15px;
}
.city__button {
    display: flex;
    margin: 0px 5px;
    width: 20px;
    border: none;
    background: inherit;
}
</style>
