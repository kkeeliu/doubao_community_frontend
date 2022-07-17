<template>
  <div>
    <!-- box 白色为背景的长框 -->
    <div class="box">🔔 {{ billboard.content }}</div>
    <div class="columns">
      <div class="column is-three-quarters"><PostTopic></PostTopic></div>
      <div class="column"><CardBar></CardBar></div>
    </div>
  </div>
</template>

<script>
import { getRequest } from "../utills/api";
import Index from "@/views/post/Index.vue"
import CardBar from "@/views/card/CardBar.vue"


export default {
    name: "Home",
    components: { PostTopic: Index ,CardBar},
    data() {
        return {
            billboard: {
                content: "",
            },
        };
    },
    mounted() {
        this.initBilboard();
    },
    methods: {
        initBilboard() {
            getRequest("/billboard/show").then((resp) => {
                if (resp) {
                    this.billboard.content = resp.data.content;
                }
            });
        },
    }
};
</script>
