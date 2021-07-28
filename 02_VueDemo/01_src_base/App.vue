<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo" />
    <!-- 3.使用组件标签 -->
    <HelloVue />
  </div>
</template>
<script>
// 1.引入组件
import HelloVue from "./components/HelloVue.vue";
export default {
  // 2.映射组件标签
  components: { HelloVue },
};
</script>
<style>
.logo {
  transition: transform 0.4s;
}
.logo:hover {
  transform: scale(1.3);
}
</style>