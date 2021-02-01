<template>
    <div class="c-datepicker">
        <label class="c-datepicker__title">{{title? title + ":" : ""}}</label>
        <div class="c-datepicker__content">
            <DatePicker
                :value="currentDateRange"
                type="datetimerange"
                format="yyyy-MM-dd"
                :placeholder="placeholder"
                style="width: 100%"
            ></DatePicker>
        </div>
    </div>
</template>
<script>
    export default {
        name: "CDatepicker",
        data() {
            return {
                currentDateRange: []
            };
        },
        props: {
            placeholder: {
                type: String,
                default: "选择时间区间"
            },
            title: {
                type: String,
                default: ""
            },
            value: {}
        },
        created() {
            this.currentDateRange = this.value;
        },
        watch: {
            currentValue(newValue) {
                this.$emit("input", newValue);
            }
        }
    }
</script>

<style>
.c-datepicker {
    display: flex;
    align-items: center;
    padding: 0.5em;
}
.c-datepicker__title {
    padding-right: 1em;
    font-weight: bold;
}
.c-datepicker__content {
    flex: 1;
}
</style>