import Vue from 'vue';
import App from './App.vue';
import router from './route';

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    router
})