<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <TodoHeader :addTitle="addTitle" /> -->
      <!-- <TodoHeader @addTitle="addTitle" /> --><!-- 给TodoHeader对象标签绑定addTitle监听 -->
      <TodoHeader ref="header" />
      <!-- <TodoList :TodoData="TodoData" :removeTitle="removeTitle" /> -->
      <TodoList :TodoData="TodoData" :removeTitle="removeTitle" />
      <!-- <TodoFooter
        :TodoData="TodoData"
        :removeAccomplish="removeAccomplish"
        :selectAllTods="selectAllTods"
      /> -->

      <TodoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checked" />
        <span slot="count"
          >已完成{{ completeSize }} / 全部{{ TodoData.length }}</span
        >
        <button
          class="btn btn-danger"
          @click="removeAccomplish"
          v-show="completeSize"
          slot="btn"
        >
          清除已完成任务
        </button>
      </TodoFooter>
    </div>
  </div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import PubSub from "pubsub-js";
import storageUtil from "./util/storageUtil";
export default {
  data() {
    return {
      // 读取localStorage读取TodoData
      TodoData: storageUtil.readUtil(),
    };
  },
  mounted() {
    //执行异步代码
    this.$refs.header.$on("addTitle", this.addTitle);
    // 订阅消息
    PubSub.subscribe("removeTitle", (msg, index) => {
      // console.log(index);
      this.removeTitle(index);
    });
  },
  computed: {
    completeSize() {
      return this.TodoData.reduce(
        (perTotal, item) => perTotal + (item.complete ? 1 : 0),
        0
      );
    },
    isAllCheck: {
      get() {
        return (
          this.completeSize === this.TodoData.length && this.completeSize > 0
        );
      },
      set(value) {
        this.selectAllTods(value);
      },
    },
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
      /* handler: function (value) {
        // 将TodoData最新的值的json数据，保存到localStorage
        window.localStorage.setItem("todos_key", JSON.stringify(value));
      }, */
      handler: storageUtil.saveUtil,
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