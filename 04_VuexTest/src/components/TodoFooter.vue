<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span>
      <span>已完成{{ completeCount }}</span> / 全部{{ todolCount }}
    </span>
    <button
      class="btn btn-danger"
      @click="clearAllCompleted"
      v-show="completeCount"
    >
      清除已完成任务
    </button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["todolCount", "completeCount"]),
    isAllCheck: {
      get() {
        return this.$store.getters.isAllSelect;
      },
      set(value) { //监视是否发生变化
      console.log(value);
        this.$store.dispatch("selectAlltodos", value);
      },
    },
  },
  methods: {
    ...mapActions(["clearAllCompleted"]),
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