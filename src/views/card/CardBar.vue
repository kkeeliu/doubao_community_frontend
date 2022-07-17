<template>
  <div>
    <!-- 登录 -->
    <section><Login></Login></section>
    <!-- 每日一句 -->
    <section><Tip></Tip></section>
    <!-- 推广 -->
    <section><Promotion></Promotion></section>
  </div>
</template>

<script>
import Login from "@/views/card/Login.vue";
import Promotion from "@/views/card/Promotion.vue";
import Tip from "@/views/card/Tip.vue";

export default {
  name: "CardBar",
  components: { Login, Promotion, Tip },
};
</script>

<style>
</style>