require('./bootstrap');

import Vue from "vue";

Vue.component("top-component",require("./page/top.vue").default);

const app = new Vue({
    el:"#app"
})
