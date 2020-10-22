import NomalButton from "../../../components/buttons/NormalButton.vue";
import Vue from "vue";
const expect = chai.expect;
const should = chai.should();

describe('NomalButton', () => {
    it("不接受type参数,能够渲染default样式,且默认的值为button", () => {
        const Constructor = Vue.extend(NomalButton);
        const vm = new Constructor();

        vm.$mount();
        const button_dom = vm.$el;
        const classList = button_dom.classList;
        const buttonText = button_dom.textContent;

        expect(classList.contains("normal-button--default")).to.be.true;
        expect(buttonText).to.equal("default");
    });
    it("接收type参数,能够渲染对应的button样式", () => {
        const Constructor = Vue.extend(NomalButton);
        const vm = new Constructor({
            propsData: {
                type: "primary"
            }
        });

        vm.$mount();
        const classList = vm.$el.classList;

        expect(classList.contains("normal-button--primary")).to.be.true;
    });
    it("is-plain", () => {
        const Constructor = Vue.extend(NomalButton);
        const vm = new Constructor({
            propsData: {
                isPlain: true
            }
        });

        vm.$mount();
        const classList = vm.$el.classList;

        expect(classList.contains("is-plain")).to.be.true;
    });
});
