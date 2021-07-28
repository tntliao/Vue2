<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  </div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  /* data() {
    return {
      // 读取localStorage读取TodoData
      TodoData: JSON.parse(window.localStorage.getItem("todos_key") || "[]"),
    };
  }, */
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  /* watch: {
    //监视
    TodoData: {
      deep: true, //深度监视
      handler: function (value) {
        // 将TodoData最新的值的json数据，保存到localStorage
        window.localStorage.setItem("todos_key", JSON.stringify(value));
      },
    },
  }, */
};
</script>
<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>