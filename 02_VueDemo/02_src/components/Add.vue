<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    addComment: {
      //指定属性名/属性值的类型/必要性
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      content: "",
    };
  },
  methods: {
    add() {
      const name = this.name;
      const content = this.content;

      if (!Boolean(name) || !Boolean(content)) {
        console.log(true);
        return;
      }

      const comment = {
        name,
        content,
      };

      this.addComment(comment);
    },
  },
};
</script>
<style>
</style>