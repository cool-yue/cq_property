<template>
    <div class="tabs">
        <div
          v-for="(item, i) in items"
          :key="i"
          @click="handleClick(item, i)"
          :title="item"
          :class="['tabs__tab', {'tabs__tab--active': i === activeIndex},{'tabs__tab--leftRound': i === 0}, {'tabs__tab--rightRound': i === items.length - 1}]"
        >{{item}}</div>
    </div>
</template>
<script>
export default {
    name:"Tabs",
    data() {
        return {
            activeIndex: 0
        };
    },
    name:"Tabs",
    props: {
        items: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods: {
        handleClick(item, index) {
            this.activeIndex = index;
            this.$emit("on-tab-click", item);
        }
    },
    mounted() {
        this.$emit("on-tab-click", this.items[0]);
    }
};
</script>
<style>
.tabs {
    display: flex;
}

.tabs__tab {
    min-width: 100px;
    font-size: 14px;
    box-sizing: border-box;
    text-align: center;
    background-color: #f5f5fa;
    border:1px solid #e4e7ed;
    padding-right: 20px;
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    color: #909399;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.tabs__tab:hover {
    background-color: #fff;
}

.tabs__tab--active {
    font-weight: bold;
    color: black;
    background-color: #fff;
}

.tabs__tab--leftRound {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.tabs__tab--rightRound {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>