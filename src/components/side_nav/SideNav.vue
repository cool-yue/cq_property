<template>
    <div class="side-nav">
        <div
            v-for="(item, i) in items"
            :class="['side-nav__item']"
        >{{item.title}}</div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => {
                return [];
            }
        },
        width: {
            type: String,
            default: "200px"
        }
    }
};
</script>
<style>
.side-nav {
    background-color: rgb(73,73,73);
}
.side-nav__item {
    color: rgb(175,175,175);
    font-size: 14px;
    line-height: 14px;
    padding: 12px 20px;
    border-top: 1px solid rgb(88,88,88);
    text-align: center;
}
.side-nav__item--active {
    color: #fff;
}
</style>