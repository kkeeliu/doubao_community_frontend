<template>
  <div>
    <el-card>
      <div slot="header">💐 发帖</div>
      <div v-if="this.token != null && this.token !== ''" class="has-text-centered">
        <b-button
          type="is-danger"
          tag="router-link"
          :to="{ path: '/post/create' }"
          outlined
          >✍ 发表想法</b-button
        >
      </div>

      <div v-else class="has-text-centered">
        <b-button
          type="is-primary"
          tag="router-link"
          :to="{ path: '/register' }"
          outlined
          >马上入驻</b-button
        >
        <b-button
          type="is-danger"
          tag="router-link"
          :to="{ path: '/login' }"
          outlined
          class="ml-2"
        >
          社区登入</b-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      token: window.sessionStorage.getItem("tokenStr")
    }
  }
};
</script>

<style>
</style>