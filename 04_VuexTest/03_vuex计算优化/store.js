import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    //初始化状态
    state: {
        count: 0
    },
    //包含多个更新state函数对象
    mutations: {
        INCREMENT(state) {
            state.count++;
        },
        DECREMENT(state) {
            state.count--;
        }
    },
    //包含多个对于事件回调函数的对象
    actions: {
        //增加的action
        increase({ commit }) {
            commit('INCREMENT');
        },
        //减少的action
        reduce({ commit }) {
            commit('DECREMENT');
        },
        addOdd({ commit, state }) {
            if (state.count % 2 === 0) commit('INCREMENT');
        },
        increaseAsync({ commit }) {
            setTimeout(() => {
                commit('INCREMENT');
            }, 1000)
        }
    },
    //包含多个getters计算属性函数的对象
    getters: {
        evenOfOdd(state) {
            return state.count % 2 === 0 ? '偶数' : '奇数'
        }
    }
})