<template>
    <div class="asset-state__container">
        <div class="asset-state__toolbar">
            <normal-button type="primary">+&nbsp&nbsp新建状态</normal-button>
        </div>
        <div class="asset-state__content">
            <Table border :columns="tableColumns" :data="tableData">
                <template slot-scope="{row, index}" slot="action">
                    <a class="asset-state__update">编辑</a>
                    <a class="asset-state__delete">删除</a>
                </template>
            </Table>
            <Page :total="50" style="float:right;margin-top:2rem;"></Page>
        </div>
    </div>
</template>
<script>
import NormalButton from "@compos/buttons/NormalButton.vue";
export default {
    name: "AssetState",
    data() {
        return {
            tableColumns:[
                {
                    title: "状态名称",
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
                    name: "库存",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "使用中",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "修理中",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "出借中",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "已注销",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "重建中",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "运营中",
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
.asset-state__toolbar {
    margin-bottom: 1rem;
}
</style>