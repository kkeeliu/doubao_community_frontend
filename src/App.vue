<template>

  <div>
     <div class="mb-5">
      <Header></Header>
  </div>


  <!-- container 容器类 居中显示-->
  <div class="container">
    <router-view />
  </div>
  </div>
 
</template>
<script>
import Header from "@/components/layout/Header";
export default {
  name: "App",
  components: { Header},
};
</script>
<style>
</style>
