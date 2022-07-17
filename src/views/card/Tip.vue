<template>
  <div>
    <el-card>
      <div slot="header">
         🥳 每日一句
      </div> 
      <div>
        <!-- 文字居右 块级元素 -->
        <div class="has-text-left block">
            条条大路通罗马
        </div>
        <!-- margin-top:5px -->
        <div class="has-text-right mt-5 block">
            ——托尔斯泰
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
    name: "Tip"
}
</script>

<style>

</style>