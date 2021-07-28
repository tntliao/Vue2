import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

//声明使用插件
Vue.use(VueResource); //内部会给vm对象和组件添加一个属性：$http

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})