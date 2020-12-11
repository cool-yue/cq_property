<template>
    <div class="asset-unit__container">
        <div class="asset-unit__toolbar">
            <normal-button type="primary">+&nbsp&nbsp添加</normal-button>
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
    name: "AssetUnit",
    data() {
        return {
            tableColumns:[
                {
                    title: "单位名称",
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
                    name: "个",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "套",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "台",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "辆",
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
    margin-bottom: 1rem;
}
</style>