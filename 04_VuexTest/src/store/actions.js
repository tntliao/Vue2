/* 
    包含多个接受组件通知出发mutation调用间接状态的对象
 */
import { ADD_TODO, DEL_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED } from './mutations-types'

export default {
    addTodo({ commit }, todo) {
        //提交对mutation的请求
        commit(ADD_TODO, { todo })
    },
    delTodo({ commit }, index) {
        commit(DEL_TODO, { index })
    },
    selectAlltodos({ commit }, check) {
        commit(SELECT_ALL_TODOS, { check })
    },
    clearAllCompleted({ commit }) {
        commit(CLEAR_ALL_COMPLETED)
    }
}