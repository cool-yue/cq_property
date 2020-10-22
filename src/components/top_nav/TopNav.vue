<template>
    <div class="top-nav">
        <div
            v-for="(item, i) in items"
            :class="['top-nav__item', {'top-nav__item--active': i === activeItemIndex}]"
            @click="handleClick(item.text, i)"
        >
            <i class="top-nav__icon"></i>
            <span class="top-nav__text">{{item.text}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "top-nav",
    data() {
        return {
            activeItemIndex: 0
        };
    },
    props: {
        items: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods: {
        handleClick(content, index) {
            this.activeItemIndex = index;
            this.$emit("on-item-click", content)
        }
    },
    mounted() {
        if (this.items.length > 0) {
            this.$emit("on-item-click", this.items[0].text);
        }
    }
};
</script>
<style>
.top-nav {
    min-height:75px;
    height: 100%;
    display: flex;
}
.top-nav__item {
    height: 100%;
    min-width: 50px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 16px;
    margin-right:1.5rem;
    font-size:1.2rem;
}
.top-nav__item:hover {
    background-color: rgb(177,211,252);
}
.top-nav__item--active {
    background-color: rgb(177,211,252);
    color: rgb(12,73,106);
}
.top-nav__item--active .top-nav__text {
    color:rgb(12,73,106);
}
.top-nav__item:hover .top-nav__text {
    background-color: rgb(177,211,252);
    color: rgb(12,73,106);
}

.top-nav__icon {
    height: 60%;
}
.top-nav__text {
    color: white;
    line-height: 1;
    flex: 1;
}
.top-nav__text {}
</style>