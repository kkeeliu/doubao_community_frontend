<template>
  <div>
    <!-- box 白色为背景的长框 -->
    <div class="box">🔔 {{billboard}}</div>   
  </div>
</template>

<script>


export default {
  name: 'Home',
  data(){
    return{
      billboard:'版本更新'
    }
  }

}
</script>
