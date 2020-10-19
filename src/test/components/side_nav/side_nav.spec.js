import SideNav from "../../../components/side_nav/SideNav.vue";
import chai from "chai";
import sinon from "sinon";
import Vue from "vue";

const expect = chai.expect;

describe("sideNav", () => {
    it("接受一个items对象数组,能够正确渲染侧边栏", () => {
        const constructor = Vue.extend(SideNav);
        const items = [
            {
                title: "菜单0",
                children: []
            },
            {
                title: "菜单1",
                children: []
            }
        ];
        const vm = new constructor({
            propsData: {
                items
            }
        });

        vm.$mount();
        const dom = vm.$el;
        const selector = ".side-nav__item";
        const domItems = dom.querySelectorAll(selector);
        const length = domItems.length;
        expect(length).to.equal(2);
        domItems.forEach((item, i) => {
            expect(item.textContent).to.equal(`菜单${i}`);
        });
    });
});