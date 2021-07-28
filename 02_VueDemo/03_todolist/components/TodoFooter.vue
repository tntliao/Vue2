<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span>
      <span>已完成{{ completeSize }}</span> / 全部{{ TodoData.length }}
    </span>
    <button
      class="btn btn-danger"
      @click="removeAccomplish"
      v-show="completeSize"
    >
      清除已完成任务
    </button>
  </div>
</template>
<script>
export default {
  props: {
    TodoData: Array,
    removeAccomplish: Function,
    selectAllTods: Function,
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
};
</script>
<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>