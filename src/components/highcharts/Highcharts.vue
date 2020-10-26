<template>
    <div class="highcharts__container"></div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default {
    name: "highcharts",
    data() {
        return {
            chart: null
        };
    },
    props: {
        options: {
            type: String,
            default: () => {
                return JSON.stringify({});
            }
        },
        styles: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            console.log(this.options);
            console.log("styles", this.styles);
            this.$el.style.width = (this.styles.width || 1500) + 'px';
            this.$el.style.height = (this.styles.height || 320) + 'px';
            console.log(this.$el);
            this.chart = new Highcharts.Chart(this.$el, this.options && JSON.parse(this.options));
        }
    }
};
</script>
<style>
.highcharts__container {
    width: 500px;
    height: 320px;
}
</style>