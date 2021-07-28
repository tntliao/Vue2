<template>
  <ul class="todo-main">
    <TodoItem
      v-for="(item, index) in TodoData"
      :key="index"
      :item="item"
      :index="index"
      :removeTitle="removeTitle"
    />
  </ul>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  props: {
    TodoData: Array,
    removeTitle: Function,
    selectAllTods: Function,
  },
  components: {
    TodoItem,
  },
};
</script>
<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>