<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user">
      <span>{{ comment.name }}</span
      ><span>说:</span>
    </p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>
<script>
export default {
  props: {
    comment: Object, //指定属性名和属性值
    removeComment: Function,
    index: Number,
  },
  methods: {
    deleteItem() {
      const { comment, removeComment, index } = this;
      if (window.confirm(`你确定要删除${comment.name}吗?`)) {
        removeComment(index);
      }
    },
  },
};
</script>
<style>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>