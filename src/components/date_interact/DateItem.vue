<template>
    <div>
        <div></div>
        <div v-if="isFilled">
            <button>已填报</button>
            <button>查看</button>
        </div>
        <div v-else>
            <button>填报</button>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            dateArr: Object,
            isFilled: Boolean
        }
    };
</script>