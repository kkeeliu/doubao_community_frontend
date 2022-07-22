<template>
  <div>
    <el-card>
      <div slot="header">
         🥂 推广
      </div>
      <div>
        <p v-for="(item,index) in list"  :key=index class="block">
        <a :href="item.link" target="_blank">{{item.title}}</a>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getRequest } from '../../utills/api'
export default {
  name: "Promotion",
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    this.initData()
  },
  methods:{
    initData(){
      getRequest('/promotion/list').then((resp)=>{
        if(resp){
          this.list = resp.data
        }
      })
    }
  }
}
</script>

<style>

</style>