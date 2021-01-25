<template>
<div class="p-container">
    <header class="p-header">
        <div class="p-header__title"><img src="./assets/images/header_title.png" style="height:100%;"></div>
        <div class="p-header___nav">
            <top-nav :items="topNavItems" @on-item-click="hanldeTopNavClick"></top-nav>
        </div>
        <div class="p-header__divide">|</div>
        <div class="p-header__avatar">
            <avatar icon="ios-person" size="large" :style="{color:'white', 'margin-right':'1rem'}"></avatar>
            <Dropdown trigger="click">
                <a style="color:white;">admin<Icon type="md-arrow-dropright"></Icon></a>
                <DropdownMenu slot="list">
                    <DropdownItem>修改密码</DropdownItem>
                    <DropdownItem>退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </header>
    <section class="p-section__main">
        <aside class="p-sidebar">
            <side-nav :items="sideNavItems" @on-item-click="handleSideClick"></side-nav>
        </aside>
        <main class="p-main">
                <component :is="currentCompo"></component>
        </main>
    </section>
</div>
</template>
<script>
import SideNav from "@compos/side_nav/SideNav.vue";
import TopNav from "@compos/top_nav/TopNav.vue"
import Tabs from "@compos/tabs/Tabs.vue";
import NotFound from "./NotFound.vue";

import { compos } from "./components/business";
import compoUtils from "./components/business";

import menu from "./menuConfig.js";

const componentsOption = {SideNav, TopNav, Tabs, NotFound, ...compos};

export default {
    name: "Home",
    data() {
        return {
            currentCompo: "AuthConfig",
            sideNavItems: [
                {
                    text: "资产单位"
                },
                {
                    text: "资产分类"
                },
                {
                    text: "资产状态"
                },
                {
                    text: "资产来源"
                },
                {
                    text: "折旧配置"
                },
                {
                    text: "权限配置"
                },
                {
                    text: "流程配置"
                }
            ],
            topNavItems: [
                {
                    text: "配置管理",
                    src: "#icon-peizhiguanli"
                },
                {
                    text: "资产入库",
                    src: "#icon-lunkuohua22_ruku"
                },
                {
                    text: "资产流转变更",
                    src: "#icon-biangengxiangguan"
                },
                {
                    text: "资产折旧",
                    src: "#icon-tubiaozhizuomoban-108"
                },
                {
                    text: "资产收支",
                    src: "#icon-liushuizhangguanli-"
                },
                {
                    text: "资产记录",
                    src: "#icon-jilu"
                },
                {
                    text: "资产统计",
                    src: "#icon-tongji"
                },
                {
                    text: "系统日志",
                    src: "#icon-rizhiliebiao"
                }
            ],
            tabItems: ["景观", "公共设施", "厂房", "监测设备", "污水处理设备", "管网", "办公设备", "日常耗材", "其他"],
        };
    },
    methods: {
        hanldeTopNavClick(tabName) {

        },
        hanldeTopNavClick(tabName) {
            this.sideNavItems = menu[tabName] || []
        },
        handleSideClick(tabName) {
            if (!compoUtils.getCompoByMenu(tabName)) {
                this.currentCompo = NotFound;
                console.log("没有找到组件");
                return;
            }
            this.currentCompo = compoUtils.getCompoByMenu(tabName);
        }
    },
    beforeCreate() {
        console.log("$options", this.$options);
    },
    components: componentsOption
};
</script>
<style>
html, body {
    height: 100%;
}
.p-container {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.p-header {
    height: 80px;
    box-sizing: border-box;
    background: #5ba5f8;
    display:flex;
    padding-right: 3rem;
    flex:0 0 80px;
}
.p-header__title {
    height:100%;
    font-size:2rem;
    color: #fff;
    line-height:74px;
}
.p-header___nav {
    height: 100%;
}
.p-section__main {
    flex: 1;
    display: flex;
}
.p-sidebar {
    min-width: 150px;
    height: 100%;
    background-color:  rgb(73,73,73);
}
.p-main {
    height: 100%;
    flex: 1;
    padding: 4rem 1.5rem 0;
    background-color: white;
}
.p-header__avatar {
    min-width: 120px;
    margin-left: auto;
    line-height: 74px;
}

.p-header__divide {
    margin-left: auto;
    line-height: 74px;
    font-size: 1.5rem;
    color: #fff;
}
</style>