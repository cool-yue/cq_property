<template>
    <div class="process-config__container">
        <div class="process-config__toolbar">
            <normal-button type="primary">+&nbsp&nbsp添加流程</normal-button>
        </div>
        <div class="process-config__content">
            <Table border :columns="tableColumns" :data="tableData">
                <template slot-scope="{row, index}" slot="action">
                    <a class="process-config__update">编辑</a>
                    <a class="process-config__delete">删除</a>
                </template>
            </Table>
            <Page :total="50" style="float:right;margin-top:2rem;"></Page>
        </div>
    </div>
</template>
<script>
import NormalButton from "@compos/buttons/NormalButton.vue";
export default {
    name: "ProcessConfig",
    data() {
        return {
            tableColumns:[
                {
                    title: "流程名称",
                    key: "name"
                },
                {
                    title: "对应申请",
                    key: "apply"
                },
                {
                    title: "描述",
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
                    name: "资产维修流程",
                    apply: "资产维修申请",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "资产领用流程",
                    apply: "资产领用申请",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "资产转移流程",
                    apply: "资产调拨申请",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "资产报销流程",
                    apply: "资产报销申请",
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
.process-config__toolbar {
    margin-bottom: 1rem;
}
</style>