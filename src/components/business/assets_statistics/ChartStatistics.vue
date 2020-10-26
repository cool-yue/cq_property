<template>
<div class="chart-statistics__container">
<div class="chart-statistics___toolbar">
    <Form v-model="searchParams" :label-width="80">
        <Row>
            <Col span="6">
                <FormItem label="资产大类:">
                    <Select>
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="资产小类:">
                    <Select>
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="资产来源:">
                    <Select>
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6">
                 <FormItem label="所属部门:">
                    <Select>
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="资产状态:">
                    <Select>
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="起止时间:">
                    <DatePicker type="daterange" split-panels placeholder="Select date" ></DatePicker>
                </FormItem>
            </Col>
            <Col span="6"></Col>
            <Col span="6">
                <normal-button type="primary">查询</normal-button>
            </Col>
        </Row>
    </Form>
</div>
<Divider />
<div class="chart-statistics__content">
    <div class="chart-statistics__tabs">
        <tabs :items="['图形','表格']"></tabs>
    </div>
    <transition>
        <div v-if="isChartActive">
            <div class="chart-statistics___chart">
                <div class="chart-statistics___smallchart">
                    <div class="chart-statistics__pie">
                        <cprogress :cw="80" :id="1" :stroke-width='4' stroke-color="#0062FF" bg="#FFFFFF" :percent="46"></cprogress>
                        <div>
                            <h3>资产使用率</h3>
                            <div>较上月增加2%</div>
                        </div>
                    </div>
                    <div class="chart-statistics__pie">
                        <cprogress :cw="80" :id="1" :stroke-width='4' stroke-color="#FF974A" bg="#FFFFFF" :percent="14"></cprogress>
                        <div>
                            <h3>资产使用率</h3>
                            <div>较上月增加5%</div>
                        </div>
                    </div>
                    <div class="chart-statistics__pie">
                        <cprogress :cw="80" :id="1" :stroke-width='4' stroke-color="#3DD598" bg="#FFFFFF" :percent="74"></cprogress>
                        <div>
                            <h3>资产维修率</h3>
                            <div>较上月降低3%</div>
                        </div>
                    </div>
                    <div class="chart-statistics__bar">
                        <high-charts :options="barOptions" :styles="{width:'350',height:'200'}"></high-charts>
                    </div>
                </div>
                <div class="chart-statistics___bigchart">
                    <high-charts :options="bigChartOptions"></high-charts>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="chart-statistics__table">
                table
            </div>
        </div>
    </transition>
</div>
</div>
</template>
<script>
import Tabs from "@compos/tabs/Tabs.vue";
import NormalButton from "@compos/buttons/NormalButton.vue";
import HighCharts from "@compos/highcharts/Highcharts.vue";
import Cprogress from "@compos/highcharts/Circle.vue";
import lineOptions from "./line.js";
import barOptions from "./bar.js";
export default {
    data() {
        return {
            isChartActive: true,
            searchParams: {}
        };
    },
    components: {
        Tabs,
        NormalButton,
        HighCharts,
        Cprogress
    },
    beforeMount() {
        this.bigChartOptions = JSON.stringify(lineOptions);
        this.barOptions = JSON.stringify(barOptions);
    }
};
</script>
<style>

.chart-statistics___smallchart {
    margin-top: 12px;
    height: 200px;
    border: 1px solid #e8eaec;
    border-radius: 4px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
}
.chart-statistics__pie {
    justify-content: center;
    display: flex;
    align-items: center;
}

.chart-statistics___smallchart>div {
    box-sizing: border-box;
    width: 25%;
}
.chart-statistics___bigchart {
    height: 320px;
    border: 1px solid #e8eaec;
    border-radius: 4px;
}
</style>