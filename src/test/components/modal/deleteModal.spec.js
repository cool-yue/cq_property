import DeleteModal from "../../../components/modal/DeleteModal.vue";
import chai from "chai";
import Vue from "vue";

const shoule = chai.should();
const expect = chai.expect;

describe('DeleteModal', () => {
    it("默认标题包含'删除'2字,对话框内容包含'确认删除'", () => {
        const Constructor = Vue.extend(DeleteModal);
        const vm = new Constructor();

        vm.$mount();
        const dom = vm.$el;
        const title = dom.querySelector(".delete-modal__title").textContent;
        const content = dom.querySelector(".delete-modal__content").textContent;
        const targetTitle = "删除";
        const targetContent = "确认删除";

        expect(title.indexOf(targetTitle) > -1).to.be.true;
        expect(content.indexOf(targetContent) > -1).to.be.true
    });
    it("点击取消按钮,能够关闭modal", () => {
        const Constructor = Vue.extend(DeleteModal);
        const vm = new Constructor();

        vm.$mount();
        const dom = vm.$el;
        const cancel_button = dom.querySelector(".delete-modal__title").textContent;
        const targetTitle = "删除";
        const targetContent = "确认删除";
    });
});

