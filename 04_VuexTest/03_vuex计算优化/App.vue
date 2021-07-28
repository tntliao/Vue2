<template>
  <div>
    <p>
      click&nbsp;{{ count }},count is
      {{ evenOfOdd }}
    </p>
    <button @click="increase">+</button>
    <button @click="reduce">-</button>
    <button @click="addOdd">increment if odd</button>
    <button @click="increaseAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["count"]), //mapState()返回值：{count(){return this.$store.state['count']}}
    ...mapGetters(["evenOfOdd"]), //mapGetters()返回值：{evenOrOdd(){return this.$store.getters['evenOfOdd']}}
  },
  methods: {
    ...mapActions(["increase", "reduce", "addOdd", "increaseAsync"]),
  },
  mounted() {
  },
};
</script>

<style>
</style>
