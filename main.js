import Vue from "vue";
import App from './src/App.vue';
import Home from "./src/Home.vue";
import "./src/assets/css/resetStyle.css";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);
new Vue({
    el: '#app',
    render: h => h(App)
});