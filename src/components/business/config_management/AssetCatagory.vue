<template>
    <div class="asset-catagory">
        <div class="asset-catagory__toolbar">
            <div class="asset-catagory__title">资产类型:</div>
            <div class="asset-catagory__tabs">
                <tabs :items="tabItems"></tabs>
                <normal-button type="primary" is-plain style="margin-top:1rem;font-size:1.2em;">+新建资产小类</normal-button>
            </div>

        </div>
        <div class="asset-catagory__content">
            <div class="asset-catagory__buttons">
                <normal-button is-plain type="primary">导出</normal-button>
                <normal-button is-plain type="primary">新增</normal-button>
            </div>
            <Table border :columns="tableColumns" :data="tableData">
                <template slot-scope="{row, index}" slot="action">
                    <a class="asset-catagory__update">编辑</a>
                    <a class="asset-catagory__delete">删除</a>
                </template>
            </Table>
            <Page :total="50" style="float:right;margin-top:2rem;"></Page>
        </div>
    </div>
</template>
<script>
import Tabs from "@compos/tabs/Tabs.vue";
import NormalButton from "@compos/buttons/NormalButton.vue"
export default {
    name: "AssetCatagory",
    data() {
        return {
            tabItems: ["景观", "公共设施", "厂房", "监测设备", "污水处理设备", "管网", "办公设备", "日常耗材", "其他"],
            tableColumns:[
                {
                    title: "小类名称",
                    key: "name"
                },
                {
                    title: "单位",
                    key: "unit"
                },
                {
                    title: "备注",
                    key: "note"
                },
                {
                    title: "添加时间",
                    key: "createAt"
                },
                {
                    title: "修改时间",
                    key: "updateAt"
                },
                {
                    title: "操作",
                    slot: "action",
                    align: 'center'
                }
            ],
            tableData:[
                {
                    name: "流量计",
                    unit: "个",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "雨量计",
                    unit: "个",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "水位计",
                    unit: "个",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "摄像头",
                    unit: "个",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "水质监测仪器",
                    unit: "台",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                }
            ]
        };
    },
    components: {
        Tabs,
        NormalButton
    }
};
</script>
<style>
.asset-catagory__toolbar {
    display: flex;
    height: 120px;
    border-bottom: 1px solid #e8eaec;
    margin-bottom: 1rem;
}
.asset-catagory__content {
    padding: 10px 2rem 0 2rem;
}

.asset-catagory__tabs {
}

.asset-catagory__update {
    text-decoration: underline;
    margin-right: 2rem;
}

.asset-catagory__delete {
    text-decoration: underline;
    color: red;
}



.asset-catagory__buttons {
    margin-bottom: 1rem;
}

.asset-catagory__title {
    font-size: 1rem;
    margin-right:1rem;
    line-height: 40px;
}



.asset-catagory .ivu-page-item-active a{
    color: white;
}

.asset-catagory .ivu-page-item-active{
    background-color: #2d8cf0;
}
</style>