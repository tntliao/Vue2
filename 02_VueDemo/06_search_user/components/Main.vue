<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>
    <div class="row">
      <div class="card" v-for="(item, index) in users" :key="index">
        <a :href="item.url" target="_blank">
          <img :src="item.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">reactjs</p>
      </div>
    </div>
  </div>
</template>
<script>
import PubSub from "pubsub-js";
import axios from "axios";
export default {
  data() {
    return {
      firstView: true,
      loading: false,
      users: null,
      errorMsg: "",
    };
  },
  created() {
    PubSub.subscribe("search", (msg, searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName.trim()}`;
      //请求中
      this.firstView = false;
      this.loading = true;
      this.users = null;
      //发送ajax请求
      axios.get(url).then(
        (response) => {
          const data = response.data;
          const users = data.items.map((item) => ({
            url: item.html_url,
            avatar_url: item.avatar_url,
            name: item.login,
          }));
          this.loading = false;
          this.users = users;
        },
        (response) => {
          this.loading = false;
          this.errorMsg = response;
        }
      );
    });
  },
};
</script>
<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>