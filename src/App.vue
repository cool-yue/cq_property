<template>
  <div id="appContainer">
    <div>
        <h4>Button</h4>
        <normal-button></normal-button>
        <normal-button type="primary" @click="aaa">primary</normal-button>
        <normal-button type="warning">warning</normal-button>
        <normal-button type="danger">danger</normal-button>
        <normal-button type="success">success</normal-button>
    </div>
    <div>
        <h4>Tabs</h4>
        <tabs :items="tabItems"></tabs>
    </div>
    <div style="width:150px;">
        <h4>SideNav</h4>
        <side-nav :items="navItems"></side-nav>
    </div>
  </div>
</template>

<script>
import NormalButton from "./components/buttons/NormalButton.vue";
import Tabs from "./components/tabs/Tabs.vue";
import SideNav from "./components/side_nav/SideNav.vue";
  export default {
    data() {
      return {
        currentComponent: "Login",
        tabItems: ["景观", "公共设施", "厂房", "监测设备", "污水处理设备", "管网", "办公设备", "日常耗材", "其他"],
        navItems: [
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
    methods: {
      logout() {
        this.currentComponent = "Login";
      },
      login(payload) {
        this.currentComponent = payload;
      },
      aaa() {
        console.log(123);
      }
    },
    components: {
      NormalButton,
      Tabs,
      SideNav
    }
  };
</script>

<style>
  html, body {
    height:100vh;
    width: 100vw;
  }

  #appContainer {
    height:100%;
    width: 100%;
    margin: 0 auto;
  }
  #appContainer > div {
    margin-bottom : 20px;
  }
</style>