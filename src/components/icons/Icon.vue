<template>
    <span
        :class="['p-icon','p-icon--' + icon,{'is-round': isRound}]"
        :style="{width:size, height:size}"
    ></span>
</template>
<script>
export default {
    name: "p-icon",
    props: {
        icon: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: "1rem"
        },
        isRound: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style>
.p-icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.p-icon.is-round {
    border-radius: 50%;
    background-color: blue;
}
/*
.p-icon::before {
    display: inline-block;
    content: "";
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
*/

.p-icon--chevron-right {
    background-image: url("data:image/svg+xml,<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-right' fill='red' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>");
}
</style>