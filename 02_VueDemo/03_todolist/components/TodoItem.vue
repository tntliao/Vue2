<template>
  <li
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :style="{ background: bgColor }"
  >
    <label>
      <input type="checkbox" v-model="item.complete" />
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" @click="remove" v-show="isShow">删除</button>
  </li>
</template>
<script>
export default {
  props: {
    item: Object,
    index: Number,
    removeTitle: Function,
  },
  data() {
    return {
      bgColor: "white",
      isShow: false,
    };
  },
  methods: {
    remove() {
      if (window.confirm(`你确定要删除${this.item.title}吗？`)) {
        this.removeTitle(this.index);
      }
    },
    handleEnter(entry) {
      if (entry) {
        this.bgColor = "greenyellow";
        this.isShow = true;
      } else {
        this.bgColor = "white";
        this.isShow = false;
      }
    },
  },
};
</script>
<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}
/* .todo-main li .btn {
  display: none;
}
.todo-main li:hover .btn {
  display: block;
} */

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>