<template>
    <label for="location"><h3>Add Location:</h3></label>
    <div class="input__container">
        <input
            id="location"
            class="input"
            type="text"
            placeholder="Name of the city"
            :value="modelValue"
            @input="updateInput"
            @keyup.enter="$emit('upload')"
        />
        <button @click="$emit('upload')" class="enter__btn">
            <b-icon-arrow-return-left class="icon" />
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    emits: ["upload", "update:modelValue"],
    props: {
        modelValue: [String]
    },
    methods: {
        updateInput(event: Event) {
            const target = event.target as HTMLInputElement;
            this.$emit("update:modelValue", target.value);
        }
    }
});
</script>

<style lang="scss">
.input__container {
    display: flex;
    margin-top: 5px;

    .input {
        width: 100%;
        border: 2px solid deepskyblue;
        padding: 10px 15px;
        border-radius: 5px;
    }

    .enter__btn {
        display: flex;
        background: inherit;
        width: 30px;
        border: none;
    }
}
</style>
