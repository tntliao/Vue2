<template>
  <div>
    <p>id:{{ $route.params.id }}</p>
    <ul>
      <li>id:{{ messageDetail.id }}</li>
      <li>title:{{ messageDetail.title }}</li>
      <li>content:{{ messageDetail.content }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messageDetail: {},
    };
  },
  mounted() {
    const allMessageDetial = [
      {
        id: 1,
        title: "message01",
        content: "message01 content..."
      },
      {
        id: 2,
        title: "message02",
        content: "message01 content..."
      },
      {
        id: 3,
        title: "message03",
        content: "message01 content..."
      },
    ];
    this.allMessageDetial = allMessageDetial;
    const id = this.$route.params.id * 1;
    this.messageDetail = allMessageDetial.find((item) => {
      return item.id === id;
    });
  },
  watch: {
    $route: function (value) {
      const id = value.params.id * 1;
      this.messageDetail = this.allMessageDetial.find((item) => {
        return item.id === id;
      });
    },
  },
};
</script>
<style>
</style>