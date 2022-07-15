<template>
  <div>
    <!-- box 白色为背景的长框 -->
    <div class="box">🔔 {{billboard.content}}</div>   
  </div>
</template>

<script>
import { getRequest } from '../utills/api'



export default {
  name: 'Home',
  data(){
    return{
      billboard:{
        content:''
      }
    }
  },
  mounted() {
    this.initBilboard();
  },
  methods:{
    initBilboard(){
      getRequest('/billboard/show').then(resp =>{
        if(resp){
          this.billboard.content = resp.data.content
        }
      })
    }
  }

}
</script>
