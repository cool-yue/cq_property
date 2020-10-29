<template>
    <div class="top-nav">
        <div
            v-for="(item, i) in items"
            :class="['top-nav__item', {'top-nav__item--active': i === activeItemIndex}]"
            @click="handleClick(item.text, i)"
        >
            <p-icon :icon="item.src" class="top-nav__icon"></p-icon>
            <span class="top-nav__text">{{item.text}}</span>
        </div>
    </div>
</template>
<script>
import PIcon from "@compos/icons/Icon.vue";
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
    components: {
        PIcon
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
    padding: 0.2rem 0;
}
.top-nav__item {
    height: 100%;
    min-width: 50px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 16px;
    margin-right:10px;
    align-items: center;
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
    color: rgb(12,73,106);
}

.top-nav__icon {
    height: 50px;
}
.top-nav__text {
    height:30px;
    color: white;
    flex: 1;

}
.top-nav__text {}


@media (max-width:1358px) {
    .top-nav__icon {
        display: none;
    }
    .top-nav__text{
        padding-top: 15px;
    }
}

@media (max-width:1518px) {
    .top-nav__item {
        padding-left:0;
        padding-right:0;
    }
}

@media (min-width:1680px) {
    .top-nav__text {
        font-size: 18px;
    }
}
</style>