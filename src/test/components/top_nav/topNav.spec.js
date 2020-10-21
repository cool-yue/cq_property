import TopNav from "../../../components/top_nav/TopNav.vue";
import Vue from "vue";

const expect = chai.expect;

describe("topNav", () => {
    it("传入文字和图标能够正确渲染，第一次渲染默认高亮第一个,同时触发on-item-click事件", () => {
        const constructor = Vue.extend(TopNav);
        const vm = new constructor({
            propsData: {
                items: [
                    {
                        src: "",
                        text: "导航1"
                    },
                    {
                        src: "",
                        text: "导航2"
                    },
                    {
                        src: "",
                        text: "导航3"
                    },
                    {
                        src: "",
                        text: "导航4"
                    }
                ]
            }
        });
        const cb = sinon.fake();
        vm.$on("on-item-click", cb)
        vm.$mount();

        const domList = vm.$el.querySelectorAll(".top-nav__item");
        expect(domList.length).to.equal(4);
        expect(cb.calledOnce).to.be.true;
        domList.forEach((ele, i) => {
            expect(ele.querySelector(".top-nav__text").textContent).to.equal("导航" + (i + 1));
        });

    });
    it("点击某个项目后,高亮该项目,同时其他的项目取消高亮,同时触发on-item-click事件", (done) => {
        const constructor = Vue.extend(TopNav);
        const vm = new constructor({
            propsData: {
                items: [
                    {
                        src: "",
                        text: "导航1"
                    },
                    {
                        src: "",
                        text: "导航2"
                    },
                    {
                        src: "",
                        text: "导航3"
                    },
                    {
                        src: "",
                        text: "导航4"
                    }
                ]
            }
        });
        const cb = sinon.fake();
        vm.$on("on-item-click", cb)
        vm.$mount();
        const dom = vm.$el;
        const dom_three = dom.querySelector(".top-nav__item:nth-child(3)");
        dom_three.click();

        expect(cb.callCount).to.equal(2);
        expect(cb.calledWith("导航3")).to.be.true;
        Vue.nextTick(() => {
            dom.querySelectorAll(".top-nav__item").forEach((element, i) => {
                if (i === 2) {
                    expect(element.classList.contains("top-nav__item--active")).to.be.true;
                    return;
                }
                expect(element.classList.contains("top-nav__item--active")).to.be.false;
            });
            done();
        });
    });
});