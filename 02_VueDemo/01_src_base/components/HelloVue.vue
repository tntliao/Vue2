<template>
  <div>
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    //配置对象(与Vue一致)
    return {
      msg: "HelloVue",
    };
  },
};
</script>

<style>
.msg {
  color: aquamarine;
}
</style>