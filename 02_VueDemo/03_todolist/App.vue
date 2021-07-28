<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTitle="addTitle" />
      <TodoList :TodoData="TodoData" :removeTitle="removeTitle" />
      <TodoFooter
        :TodoData="TodoData"
        :removeAccomplish="removeAccomplish"
        :selectAllTods="selectAllTods"
      />
    </div>
  </div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    return {
      // 读取localStorage读取TodoData
      TodoData: JSON.parse(window.localStorage.getItem("todos_key") || "[]"),
    };
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  methods: {
    addTitle(title) {
      const todoObj = { title, complete: false };
      this.TodoData.unshift(todoObj);
    },
    removeTitle(index) {
      this.TodoData.splice(index, 1);
    },
    removeAccomplish() {
      this.TodoData = this.TodoData.filter((item) => !item.complete);
    },
    selectAllTods(check) {
      this.TodoData.forEach((item) => (item.complete = check));
    },
  },
  watch: {
    //监视
    TodoData: {
      deep: true, //深度监视
      handler: function (value) {
        // 将TodoData最新的值的json数据，保存到localStorage
        window.localStorage.setItem("todos_key", JSON.stringify(value));
      },
    },
  },
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