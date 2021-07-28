<template>
  <div>
    <p>
      click&nbsp;{{ $store.state.count }},count is
      {{ evenOfOdd }}
    </p>
    <button @click="increase">+</button>
    <button @click="reduce">-</button>
    <button @click="addOdd">increment if odd</button>
    <button @click="increaseAsync">increment async</button>
  </div>
</template>

<script>
export default {
  computed: {
    evenOfOdd() {
      return this.$store.getters.evenOfOdd;
    },
  },
  methods: {
    increase() {
      this.$store.dispatch("increment");
    },
    reduce() {
      this.$store.dispatch("decrement");
    },
    addOdd() {
      this.$store.dispatch("addOdd");
    },
    increaseAsync() {
      this.$store.dispatch("increaseAsync");
    },
  },
};
</script>

<style>
</style>
