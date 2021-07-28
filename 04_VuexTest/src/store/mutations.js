/* 
    包含多个介绍组件通知出发mutation调用间接状态的对象
 */
import { ADD_TODO, DEL_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED } from './mutations-types'
export default {
    [ADD_TODO](state, { todo }) { //添加一个对象
        state.todos.unshift(todo);
    },
    [DEL_TODO](state, { index }) { //删除一个对象
        state.todos.splice(index, 1)
    },
    [SELECT_ALL_TODOS](state, { check }) { //所有的todo是否选择
        state.todos.forEach(todo => todo.complete = check)
    },
    [CLEAR_ALL_COMPLETED](state) { //清除已完成的
        state.todos = state.todos.filter(todo => !todo.complete)
    }
}