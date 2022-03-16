require('./bootstrap');

import Vue from "vue";

// コンポーネント
Vue.component('header-component',require('./components/Header').default);

// ページ
Vue.component('top-component',require('./page/top').default);

const app = new Vue({
    el:"#app"
})
