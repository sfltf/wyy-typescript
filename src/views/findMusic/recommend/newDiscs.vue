// 新碟上架
<template>
  <div>
    <div class="card-top">
      <router-link class="card-top-link" to="">新碟上架</router-link>
      <router-link to="" class="card-top-more">更多<i class="icon-more" /></router-link>
    </div>
    <div class="card-main">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class newDiscs extends Vue {
    api = "recommend/album";
    created() {
      this.$store.dispatch(this.api).then(res => {
        debugger;
      });
    }
}
</script>
