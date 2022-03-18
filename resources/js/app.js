require('./bootstrap');

import Vue from "vue";

Vue.component('reserve-component',require('./page/reserve.vue').default);

const app = new Vue({
    el:"#app"
})
