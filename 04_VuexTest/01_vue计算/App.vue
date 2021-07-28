<template>
  <div>
    <p>click&nbsp;{{ count }},count is {{ evenOfOdd }}</p>
    <button @click="increase">+</button>
    <button @click="reduce">-</button>
    <button @click="addOdd">increment if odd</button>
    <button @click="increaseAsync">increment async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    evenOfOdd() {
      return this.count % 2 === 0 ? "偶数" : "奇数";
    },
  },
  methods: {
    increase() {
      this.count = this.count + 1;
    },
    reduce() {
      this.count = this.count - 1;
    },
    addOdd() {
      if (this.count % 2 === 0) this.count = this.count + 1;
    },
    increaseAsync() {
      setTimeout(() => {
        this.count = this.count + 1;
      }, 1000);
    },
  },
};
</script>

<style>
</style>
