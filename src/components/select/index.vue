<template>
    <div class="c-select">
        <label class="c-select__title">{{title? title + ":" : ""}}</label>
        <div class="c-select__content">
            <Select v-model="currentValue">
                <Option v-for="item in items" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
    </div>
</template>

<script>
export default {
    name: "cSelect",
    data() {
        return {
            currentValue: ""
        };
    },
    props: {
        title: {
            type: String,
            default: () => {
                return "";
            }
        },
        items: {
            type: Array,
            default: () => {
                return [];
            }
        },
        value: {}
    },
    created() {
        this.currentValue = this.value;
    },
    watch: {
        currentValue(newVal) {
            this.$emit("input", newVal);
        }
    }
}
</script>

<style>
.c-select {
    display: flex;
    align-items: center;
    padding: 0.5em;
}
.c-select__title {
    padding-right: 1em;
    font-weight: bold;
}
.c-select__content {
    flex: 1;
}
</style>