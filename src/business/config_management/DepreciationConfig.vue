<template>
    <div class="depreciation-config__container">
        <div class="depreciation-config__toolbar">
            <div class="depreciation-config__selectgroup">
                <div class="depreciation-config__layout">
                    <span>资产大类:</span>
                    <Select class="depreciation-config__select" v-model="cataVal">
                        <Option value="景观">景观</Option>
                        <Option value="shanghai">公共设施</Option>
                        <Option value="shenzhen">监测设备</Option>
                        <Option value="shenzhen">污水处理设备</Option>
                        <Option value="shenzhen">管网</Option>
                        <Option value="shenzhen">办公设备</Option>
                        <Option value="shenzhen">日常耗材</Option>
                        <Option value="shenzhen">其他</Option>
                    </Select>
                </div>
                <div class="depreciation-config__layout">
                    <span>资产小类:</span>
                    <Select class="depreciation-config__select" v-model="subCataVal">
                        <Option value="流量计">流量计</Option>
                        <Option value="雨量计">雨量计</Option>
                        <Option value="水位计">水位计</Option>
                        <Option value="shenzhen">摄像头</Option>
                        <Option value="shenzhen">水质监测设备</Option>
                    </Select>
                </div>
            </div>
            <normal-button type="primary" class="depreciation-config__button">+&nbsp&nbsp新建来源</normal-button>
        </div>
        <div class="depreciation-config__content">
            <Table border :columns="tableColumns" :data="tableData">
                <template slot-scope="{row, index}" slot="action">
                    <a class="depreciation-config__update">编辑</a>
                    <a class="depreciation-config__delete">删除</a>
                </template>
            </Table>
            <Page :total="50" style="float:right;margin-top:2rem;"></Page>
        </div>
    </div>
</template>
<script>
import NormalButton from "@compos/buttons/NormalButton.vue";
export default {
    name: "DepreciationConfig",
    data() {
        return {
            cataVal: "景观",
            subCataVal: "水位计",
            tableColumns:[
                {
                    title: "来源方式",
                    key: "name"
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
                    name: "购入",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "租用",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "借用",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "接受投资",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                }
            ]
        };
    },
    components: {
        NormalButton
    }
};
</script>
<style>
.depreciation-config__selectgroup {
    display: flex;
    line-height: 32px;
    padding-bottom: 1rem;
}
.depreciation-config__layout {
    width: 50%;
}
.depreciation-config__layout>span {
    margin-right: 1rem;
}

.depreciation-config__select {
    max-width:450px;
}
.depreciation-config__content {
    padding-top: 1rem;
}
</style>