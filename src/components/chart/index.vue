<template>
<div class="c-chart" v-if="series.length > 0">
    <div class="c-chart__chart">
         <apexchart :options="options" :series="series" height="150" width="200"></apexchart>
    </div>
    <div class="c-chart__content">
        <div class="c-chart__title">{{title}}</div>
        <div class="c-chart__info">{{info}}</div>
    </div>
</div>
</template>

<script>
export default {
  name: "cChart",
  props: {
    title: {
      type: String,
      default: ""
    },
    info: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    series: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
}
</script>

<style>
.c-chart {
  display: flex;
  align-items: center;
}
.c-chart__title {
  font-size: 1.2em;
  font-weight: bold;
}
</style>