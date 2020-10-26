<template>
    <div class="p-icon__container" :style="{width:size, height:size, color, fill:color}">
        <svg class="p-icon" aria-hidden="true">
            <use v-bind:xlink:href="icon"></use>
        </svg>
    </div>
</template>
<script>
export default {
    name: "p-icon",
    data() {
        return {
            shouldAdjust: false
        };
    },
    props: {
        icon: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: "2.5rem"
        },
        color: {
            type: String,
            default: "#2265a7"
        }
    }
};
</script>
<style>
.p-icon__container {
    display: inline-block;
    background-color: white;
    padding: 0.4em;
    border-radius:50%;
    overflow: hidden;
}
.p-icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.p-icon {
    width: 100%;
    height: 100%;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>