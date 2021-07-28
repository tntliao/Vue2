export default {
    // 总数量
    todolCount(state) {
        return state.todos.length
    },
    // 完成的数量
    completeCount(state) {
        return state.todos.reduce((perTotal, todo) => {
            return perTotal + (todo.complete ? 1 : 0)
        }, 0)
    },
    // 判断是否全部选中
    isAllSelect(state, getters) {
        return getters.todolCount === getters.completeCount && state.todos.length > 0
    },
    
}