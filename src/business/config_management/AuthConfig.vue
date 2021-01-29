<template>
    <div class="auth-config__container">
        <div class="auth-config__tabs">
            <Tabs value="高级用户">
                <TabPane label="高级用户" name="高级用户"></TabPane>
                <TabPane label="用户" name="name1"></TabPane>
                <TabPane label="游客" name="aaa"></TabPane>
            </Tabs>
        </div>
        <div class="auth-config__toolbar">
            <normal-button type="primary">配置权限角色</normal-button>
            <div class="auth-config__input">
                <span class="auth-config__title">所属功能实体</span>
                <Select class="auth-config__select">
                    <Option value="beijing">所有</Option>
                    <Option value="shanghai">资产</Option>
                    <Option value="shenzhen">统计</Option>
                </Select>
            </div>
        </div>
        <div class="auth-config__content">
            <Table border :columns="tableColumns" :data="tableData">
                <template slot-scope="{row, index}" slot="action">
                    <a class="auth-config__update">编辑</a>
                    <a class="auth-config__delete">删除</a>
                </template>
            </Table>
            <Page :total="50" style="float:right;margin-top:2rem;"></Page>
        </div>
    </div>
</template>
<script>
import NormalButton from "@compos/buttons/NormalButton.vue";
export default {
    name: "AuthConfig",
    data() {
        return {
            tableColumns:[
                {
                    title: "所属功能实体",
                    key: "name"
                },
                {
                    title: "接口url",
                    key: "apply"
                },
                {
                    title: "接口方法",
                    key: "method"
                },
                {
                    title: "接口url",
                    key: "apply"
                },
                {
                    title: "描述",
                    key: "note"
                }
            ],
            tableData:[
                {
                    name: "资产",
                    apply: "/asset",
                    method: "GET",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "资产",
                    apply: "/asset",
                    method: "POST",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "资产",
                    apply: "/asset",
                    method: "PUT",
                    note: "这是一段描述",
                    createAt: "2020-09-21",
                    updateAt: "2020-10-09"
                },
                {
                    name: "资产",
                    apply: "/asset",
                    method: "DELETE",
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
.auth-config__toolbar {
    display: flex;
}
.auth-config__title {
    min-width: 100px;
    line-height: 32px;
}
.auth-config__input {
    margin-left: 5rem;
    display: flex;
}
.auth-config__select {
    min-width: 200px;
}
.auth-config__toolbar {
    margin-bottom: 1rem;
}
</style>