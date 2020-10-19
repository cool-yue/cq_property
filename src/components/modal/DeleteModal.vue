<template>
    <div class="delete-modal" v-show="show">
        <div class="delete-modal__title">删除</div>
        <div class="delete-modal__content">确认删除吗?</div>
        <div class="delete-modal__buttons">
            <normal-button type="danger">删除</normal-button>
            <normal-button @click="handleCancle()">取消</normal-button>
        </div>
    </div>
</template>
<script>
import NormalButton from "../buttons/NormalButton.vue";
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShow: false
        };
    },
    components: {
        NormalButton
    },
    methods: {
    }

};
</script>
<style>
</style>