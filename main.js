import Vue from "vue";
import App from './src/App.vue';
import Home from "./src/Home.vue";
import "./src/assets/css/resetStyle.css";

new Vue({
    el: '#app',
    render: h => h(App)
});