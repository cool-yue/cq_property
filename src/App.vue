<template>
  <div id="appContainer">
    <div>
        <h4>normal-button</h4>
        <normal-button></normal-button>
        <normal-button type="primary" @click="aaa">primary</normal-button>
        <normal-button type="warning">warning</normal-button>
        <normal-button type="danger">danger</normal-button>
        <normal-button type="success">success</normal-button>
    </div>
    <div>
        <h4>plain normal-button</h4>
        <normal-button is-plain></normal-button>
        <normal-button type="primary" is-plain>primary</normal-button>
        <normal-button type="warning" is-plain>warning</normal-button>
        <normal-button type="danger" is-plain>danger</normal-button>
        <normal-button type="success" is-plain>success</normal-button>
    </div>
    <div>
        <h4>Tabs</h4>
        <tabs :items="tabItems"></tabs>
    </div>
    <div style="width:150px;">
        <h4>SideNav</h4>
        <side-nav :items="navItems"></side-nav>
    </div>
    <h4>topNav</h4>
    <div style="background-color:rgb(92,178,252);height:80px;">
        <top-nav :items="topItems"></top-nav>
    </div>
    <h4>Icon</h4>
    <div>
        <p-icon icon="chevron-right" size="50px" is-round></p-icon>
    </div>
    <div>
        <Table :columns="tableColumns"></Table>
    </div>
    <h4>highcharts</h4>
    <div>
        <high-charts :options="chartOptions"></high-charts>
    </div>
    <div>
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>
import NormalButton from "./components/buttons/NormalButton.vue";
import Tabs from "./components/tabs/Tabs.vue";
import SideNav from "./components/side_nav/SideNav.vue";
import TopNav from "./components/top_nav/TopNav.vue";
import PIcon from "./components/icons/Icon.vue";
import HighCharts from "@compos/highcharts/Highcharts.vue";
import options from "@compos/highcharts/chartOptions.js";
  export default {
    name:"App",
    data() {
      return {
        currentComponent: "Login",
        tabItems: ["景观", "公共设施", "厂房", "监测设备", "污水处理设备", "管网", "办公设备", "日常耗材", "其他"],
        navItems: [
          {
            text: "资产单"
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
          topItems: [
            {
              text: "配置管理"
            },
            {
              text: "资产入库"
            },
            {
              text: "资产流转变更"
            },
            {
              text: "资产折旧"
            },
            {
              text: "资产收支"
            },
            {
              text: "资产记录"
            },
            {
              text: "资产统计"
            },
            {
              text: "系统日志"
            }
          ],
          tableColumns: [
            {
              title: "Name",
              key: "name",
            },
            {
              title: "Age",
              key: "age"
            }
          ],
          chartOptions: ""
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
      SideNav,
      TopNav,
      PIcon,
      HighCharts
    },
    beforeMount() {
      this.chartOptions = JSON.stringify(options);
    },
    mounted() {
      console.log(options);
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