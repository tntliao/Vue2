<template>
  <div>
    <mt-button type="primary" @click.native="handleClick">primary</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  methods: {
    handleClick() {
      Toast("提示信息" );
    },
  },
};
</script>
<style>
</style>