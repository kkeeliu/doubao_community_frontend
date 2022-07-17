<template>
  <div>
    <el-card>
      <div slot="header">🥳 每日一句</div>
      <div>
        <!-- 文字居右 块级元素 -->
        <div class="has-text-left block">{{tip.content}}</div>
        <!-- margin-top:5px -->
        <div class="has-text-right mt-5 block">——{{tip.author}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getRequest } from '../../utills/api';
export default {
  name: "Tip",
  data() {
    return {
      tip: {
        content: "",
        author: "",
      },
    };
  },
 mounted() {
  this.getTipToday();
 },
  methods: {
    getTipToday(){
      getRequest('/tip/today').then((resp)=>{
        if(resp){
          this.tip.content = resp.data.content;
          this.tip.author = resp.data.author;
        }
      })
    }
  },
};
</script>

<style>
</style>