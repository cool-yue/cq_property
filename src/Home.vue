<template>
<div class="p-container">
    <header class="p-header">
        <div class="p-header__title"></div>
        <div class="p-header___nav">
        </div>
    </header>
    <section class="p-section__main">
        <aside class="p-sidebar">
            <side-nav :items="sideNavItems"></side-nav>
        </aside>
        <main class="p-main"></main>
    </section>
</div>
</template>
<script>
import SideNav from "./components/side_nav/SideNav";

export default {
    data() {
        return {
            sideNavItems: [
                {
                    title: "资产单位"
                },
                {
                    title: "资产分类"
                },
                {
                    title: "资产状态"
                },
                {
                    title: "资产来源"
                },
                {
                    title: "折旧配置"
                },
                {
                    title: "权限配置"
                },
                {
                    title: "流程配置"
                }
            ]
        };
    },
    components: {
        SideNav
    }
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
    height: 10%;
    background: rgb(91,165,248);
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
    background-color: white;
}
</style>