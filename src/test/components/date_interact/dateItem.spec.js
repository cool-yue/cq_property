import DateItem from "../../../components/date_interact/DateItem.vue";
import assert from "assert";
import Vue from "vue";

describe("DateItem组件", function () {
    it("sanity test", function () {
        return;
    });
    it("输入3天一组的数据,输入一个已填报状态false,组件显示为填报按钮", function () {
        const dateArr = {
            "30": "一",
            "31": "二",
            "1": "三"
        };
        const isFilled = false;
        const propsData = {
            dateArr,
            isFilled
        };
        const DateItemConstructor = Vue.extend(DateItem);
        const vm = new DateItemConstructor({
            propsData
        });
        vm.$mount();
        const btns = vm.$el.querySelectorAll("button");

        assert.equal(btns.length, 1);
        assert.equal(btns[0].textContent, "填报");
    });
    it("输入3天一组的数据,输入一个已填报状态true,组件显示为已填报和查看", function () {
        let dateArr = {
            "30": "一",
            "31": "二",
            "1": "三"
        };
        let isFilled = true;
        const propsData = {
            dateArr,
            isFilled
        };

        const DateItemConstructor = Vue.extend(DateItem);
        const vm = new DateItemConstructor({
            propsData
        });
        vm.$mount();
        const btns = vm.$el.querySelectorAll("button");

        assert.equal(btns.length, 2);
        assert.equal(btns[0].textContent, "已填报");
        assert.equal(btns[1].textContent, "查看");
    });
});