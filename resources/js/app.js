require('./bootstrap');

import Vue from "vue";

Vue.component("top-component",require("./page/top.vue").default);
Vue.component("todo-component",require("./page/todo.vue").default);

const app = new Vue({
    el:"#app"
})
