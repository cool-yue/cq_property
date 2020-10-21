import Tabs from "../../../components/tabs/Tabs.vue";
import Vue from "vue";

const expect = chai.expect;

describe("tabs组件", () => {
    it("tabs接受一个空数组或者不传入items,什么都不渲染", () => {
        const constructor = Vue.extend(Tabs);
        const vm = new constructor();

        vm.$mount();

        expect(vm.$el.querySelectorAll(".tabs__tab").length).to.equal(0);
    });
    it("tabs接收1个item,2边同时圆角", () => {
        const constructor = Vue.extend(Tabs);
        const items = ["aaa"];
        const vm = new constructor({
            propsData: {
                items
            }
        });

        vm.$mount();
        const tabClass = vm.$el.querySelector(".tabs__tab").classList;
        expect(tabClass.contains("tabs__tab--leftRound")).to.be.true;
        expect(tabClass.contains("tabs__tab--rightRound")).to.be.true;
    });
    it("tabs接收2个item或者以上,第一个左侧圆角,最后一个右侧圆角", () => {
        const constructor = Vue.extend(Tabs);
        const items = ["aaa", "bbb"];
        const vm = new constructor({
            propsData: {
                items
            }
        });

        vm.$mount();
        expect(vm.$el.querySelector(".tabs__tab:nth-child(1)").classList.contains("tabs__tab--leftRound")).to.be.true;
        expect(vm.$el.querySelector(".tabs__tab:last-child").classList.contains("tabs__tab--rightRound")).to.be.true;
    });
    it("tabs接受items一个字符串数组,正确渲染出tab出来,并且第一次渲染高亮第一个,并触发on-tab-click时间,提供第一个tab的信息", () => {
        const constructor = Vue.extend(Tabs);
        const items = ["aaa", "bbb", "ccc"];
        const vm = new constructor({
            propsData: {
                items
            }
        });
        const cb = sinon.fake();
        vm.$on("on-tab-click", cb);
        vm.$mount();
        const dom = vm.$el;
        const tab_list = dom.querySelectorAll(".tabs__tab");

        expect(tab_list.length).to.equal(items.length);
        expect(tab_list[0].textContent).to.equal(items[0]);
        expect(tab_list[1].textContent).to.equal(items[1]);
        expect(tab_list[2].textContent).to.equal(items[2]);
        expect(tab_list[0].classList.contains("tabs__tab--active")).to.be.true;
        expect(cb.calledOnce).to.be.true;
        expect(cb.calledWith("aaa")).to.be.true;
    });
    it("点击某个tabs的某个tab能够高亮,其他tab取消高亮,并且触发on-tab-click事件,提供当前tab的文本信息", () => {
        const constructor = Vue.extend(Tabs);
        const items = ["aaa", "bbb", "ccc"];
        const vm = new constructor({
            propsData: {
               items
            }
        });
        const cb = sinon.fake();
        vm.$on("on-tab-click", cb);
        vm.$mount();
        const dom = vm.$el;


        const second_tab = dom.querySelector(".tabs__tab:nth-child(2)");
        second_tab.click();

        expect(dom.querySelectorAll(".tabs__tab--active").length).to.equal(1);
        Vue.nextTick(() => {
            expect(second_tab.classList.contains("tabs__tab--active")).to.be.true;
        });
        expect(cb.callCount).to.equal(2);
        expect(cb.calledWith("bbb")).to.be.true;
    });
});