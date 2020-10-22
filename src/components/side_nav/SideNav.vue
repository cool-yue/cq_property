<template>
    <div class="side-nav">
        <div
            v-for="(item, i) in items"
            :class="['side-nav__item',{'side-nav__item--active': i === activeIndex}]"
            :key="i"
            @click="handleClick(i, item.text)"
        >{{item.text}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: 0
        };
    },
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
    },
    methods: {
        handleClick(index, content) {
            this.activeIndex = index;
            this.$emit("on-click-item", content);
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
    font-size: 18px;
    line-height: 24px;
    padding: 30px 20px;
    border-top: 1px solid rgb(88,88,88);
    text-align: center;
    cursor: pointer;
}
.side-nav__item:last-child {
    border-bottom: 1px solid rgb(88,88,88);
}


.side-nav__item:hover {
    background-color: rgb(29,91,128);
}
.side-nav__item--active {
    background-color: rgb(29,91,128);
    color: #fff;
}
</style>