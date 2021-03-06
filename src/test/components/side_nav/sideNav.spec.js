import SideNav from "../../../components/side_nav/SideNav.vue";
import Vue from "vue";

const expect = chai.expect;

describe("sideNav", () => {
    it("接受一个items对象数组,能够正确渲染侧边栏,且第一次挂载会触发on-item-click传入正确参数", () => {
        const constructor = Vue.extend(SideNav);
        const items = [
            {
                text: "菜单0",
                children: []
            },
            {
                text: "菜单1",
                children: []
            }
        ];
        const vm = new constructor({
            propsData: {
                items
            }
        });
        const cb = sinon.fake();
        vm.$on("on-item-click", cb);
        vm.$mount();
        const dom = vm.$el;
        const selector = ".side-nav__item";
        const domItems = dom.querySelectorAll(selector);
        const length = domItems.length;
        expect(length).to.equal(2);
        expect(cb.callCount).to.equal(1);
        expect(cb.calledWith("菜单0")).to.equal(true);
        domItems.forEach((item, i) => {
            expect(item.textContent).to.equal(`菜单${i}`);
        });
    });
    it("点击某个项目能够高亮,并且触发on-click-item事件,并且传入当前tab的名称", (done) => {
        const constructor = Vue.extend(SideNav);
        const items = [
            {
                text: "菜单0",
                children: []
            },
            {
                text: "菜单1",
                children: []
            },
            {
                text: "菜单2",
                children: []
            }
        ];
        const vm = new constructor({
            propsData: {
                items
            }
        });

        vm.$mount();
        const cb = sinon.fake();
        vm.$on("on-item-click", cb);
        const dom = vm.$el;
        const selector = ".side-nav__item";
        const domItem_first = dom.querySelector(selector);
        const domItem_second = dom.querySelector(selector + ":nth-child(2)");
        const domItem_last = dom.querySelector(selector + ":last-child");
        domItem_last.click();

        expect(cb.calledOnce).to.be.true;
        expect(cb.calledWith("菜单2")).to.be.true;
        Vue.nextTick(function () {
            expect(domItem_first.classList.contains("side-nav__item--active")).to.be.false;
            expect(domItem_second.classList.contains("side-nav__item--active")).to.be.false;
            expect(domItem_last.classList.contains("side-nav__item--active")).to.be.true;
            domItem_second.click();
            expect(cb.callCount).to.equal(2);
            expect(cb.calledWith("菜单1")).to.be.true;
            Vue.nextTick(function () {
                expect(domItem_first.classList.contains("side-nav__item--active")).to.be.false;
                expect(domItem_second.classList.contains("side-nav__item--active")).to.be.true;
                expect(domItem_last.classList.contains("side-nav__item--active")).to.be.false;
                done();
            });
        });
    });
});