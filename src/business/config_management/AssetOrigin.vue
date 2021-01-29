<template>
    <div class="asset-unit__container">
        <div class="asset-unit__toolbar">
            <span>资产大类:</span>
            <Select class="asset-unit__select" v-model="cataVal">
                <Option value="景观">景观</Option>
                <Option value="shanghai">公共设施</Option>
                <Option value="shenzhen">监测设备</Option>
                <Option value="shenzhen">污水处理设备</Option>
                <Option value="shenzhen">管网</Option>
                <Option value="shenzhen">办公设备</Option>
                <Option value="shenzhen">日常耗材</Option>
                <Option value="shenzhen">其他</Option>
            </Select>
            <normal-button type="primary" class="asset-unit__button">+&nbsp&nbsp新建来源</normal-button>
        </div>
        <div class="asset-unit__content">
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
import NormalButton from "@compos/buttons/NormalButton.vue";
export default {
    name: "AssetOrigin",
    data() {
        return {
            cataVal: "景观",
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
.asset-unit__toolbar {
    display: flex;
    line-height: 32px;
}
.asset-unit__toolbar {
    margin-bottom: 1rem;
}
.asset-unit__select {
    max-width:300px;
}
.asset-unit__button {
    margin-left: 1rem;
}
</style>