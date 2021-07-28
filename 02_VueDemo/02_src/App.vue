<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <List :comments="comments" :removeComment="removeComment" />
    </div>
  </div>
</template>
<script>
import Add from "./components/Add.vue";
import List from "./components/List.vue";
export default {
  data() {
    return {
      comments: [
        //数据在哪个组件，更新数据的行为就应该在哪个组件
        { name: "Bob", content: "Vue刚开始学习" },
        { name: "Jack", content: "Vue语法还不掌握" },
        { name: "Jia", content: "nihaoliaojiajia" },
      ],
    };
  },
  methods: {
    //添加评论
    addComment(comment) {
      this.comments.unshift(comment);
    },
    removeComment(index) {
      console.log(index);
      this.comments.splice(index, 1);
    },
  },
  components: {
    Add,
    List,
  },
};
</script>
<style>
</style>