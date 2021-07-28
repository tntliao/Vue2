<template>
  <div>
    <ul>
      <li v-for="item in messages" :key="item.id">
        <router-link :to="`/home/message/detail/${item.id}`">{{
          item.title
        }}</router-link>
        <button @click="pushShow(item.id)">push查看</button>
        <button @click="replaceShow(item.id)">replace查看</button>
      </li>
    </ul>
    <button @click="back">回退</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: "",
    };
  },
  mounted() {
    setTimeout(() => {
      const messages = [
        { id: 1, title: "message01" },
        { id: 2, title: "message02" },
        { id: 3, title: "message03" },
      ];
      this.messages = messages;
    }, 1500);
  },
  methods: {
    pushShow(id) {
      this.$router.push(`/home/message/detail/${id}`);
    },
    replaceShow(id) {
      this.$router.replace(`/home/message/detail/${id}`);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>
<style>
</style>