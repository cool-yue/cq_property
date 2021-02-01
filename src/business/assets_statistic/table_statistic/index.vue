<template>
    <div class="table-statistic">
        <div class="table-statistic__toolbar">
            <Row :gutter="16">
                <Col :xs="24" :sm="12" :xl="6"><c-select title="资产大类" v-model="assetBig" :items="assetBigOptions" /></Col>
                <Col :xs="24" :sm="12" :xl="6"><c-select title="资产小类" v-model="assetSmall" :items="assetSmallOptions" /></Col>
                <Col :xs="24" :sm="12" :xl="6"><c-select title="资产来源" v-model="assetOrigin" :items="assetOriginOptions" /></Col>
                <Col :xs="24" :sm="12" :xl="6"><c-select title="所属部门" v-model="depart" :items="departOptions" /></Col>
                <Col :xs="24" :sm="12" :xl="6"><c-select title="资产状态" v-model="state" :items="stateOptions" /></Col>
                <Col :xs="24" :sm="12" :xl="6">
                     <c-datepicker title="起止时间" v-model="dateRagen"/>
                </Col>
            </row>
        </div>
        <div class="table-statistic__tabs">
            <c-tabs :items="['图形', '表格']"></c-tabs>
        </div>
        <div class="table-statistic__content">
            <div class="table-statistic__small">
                <div class="table-statistic__item">
                    <c-chart
                        title="资产使用率"
                        info="较上月上涨2%"
                        :options="assetUse.chartOptions"
                        :series="assetUse.series"
                    ></c-chart>
                </div>
                <div class="table-statistic__item">
                    <c-chart
                        title="资产使用率"
                        info="较上月上涨2%"
                        :options="assetBroken.chartOptions"
                        :series="assetBroken.series"
                    ></c-chart>
                </div>
                <div class="table-statistic__item">
                    <c-chart
                        title="资产使用率"
                        info="较上月上涨2%"
                        :options="assetFix.chartOptions"
                        :series="assetFix.series"
                    ></c-chart>
                </div>
                <div class="table-statistic__item">
                    <c-chart
                        title="资产使用率"
                        info="较上月上涨2%"
                        :options="assetInput.chartOptions"
                        :series="assetInput.series"
                    ></c-chart>
                </div>
                <div class="table-statistic__item">
                    <c-chart
                        title="资产使用率"
                        info="较上月上涨2%"
                        :options="assetDeprecation.chartOptions"
                        :series="assetDeprecation.series"
                    ></c-chart>
                </div>
            </div>
            <div class="table-statistic__big"></div>
        </div>
    </div>
</template>

<script>
import CSelect from "@compos/select";
import CDatepicker from "@compos/datepicker";
import CTabs from "@compos/tabs/Tabs.vue";
import CChart from "@compos/chart";
import options from "./options.js";
import chart from "./chart.js";
const {
    assetBigOptions,
    assetSmallOptions,
    assetOriginOptions,
    departOptions,
    stateOptions
} = options;

const {
    assetUse,
    assetBroken,
    assetFix,
    assetInput,
    assetDeprecation
} = chart;


export default {
  name: "tableStatistic",
  data() {
      return {
          assetBig: "",
          assetSmall: "",
          assetOrigin: "",
          depart: "",
          state: "",
          dateRagen: ["2019-10-10", "2019-11-11"],
          assetUse,
          assetBroken,
          assetFix,
          assetInput,
          assetDeprecation,
          assetBigOptions,
          assetSmallOptions,
          assetOriginOptions,
          departOptions,
          stateOptions
      };
  },
  components: {
      CSelect,
      CDatepicker,
      CTabs,
      CChart
  }
}
</script>

<style>
.table-statistic {
    width: 100%;
}
.table-statistic__toolbar {
    border-bottom: 1px solid #e8eaec;
}
.table-statistic > * + * {
    margin-top: 1em;
}
.table-statistic__small {
    border-radius: 1em;
    border: 1px solid #e8eaec;
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 200px;
    overflow-x: auto;
    padding-top: 1em;
}
.table-statistic__item {
    min-width: 300px;
    max-height: 150px;
    display: flex;
    align-items: center;
}
</style>