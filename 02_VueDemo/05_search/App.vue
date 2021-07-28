<template>
  <div>
    <div v-if="!repoUrl">loading..</div>
    <div v-else>
      most star repo is <a :href="repoUrl">{{ repoName }}</a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      repoUrl: "",
      repoName: "",
    };
  },
  created() {
    const url = "https://api.github.com/search/repositories?q=vu&sort=stars";
    /* this.$http.get(url).then(
      (response) => {
        const result = response.data.items[0];
        this.repoUrl = result.clone_url;
        this.repoName = result.name
      },
      (response) => {
        console.log("error");
      }
    ); */
    axios.get(url).then(
      (response) => {
        const result = response.data.items[0];
        this.repoUrl = result.clone_url;
        this.repoName = result.name;
      },
      (response) => {
        console.log("error");
      }
    );
  },
};
</script>
<style>
</style>