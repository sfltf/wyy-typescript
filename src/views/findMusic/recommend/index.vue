<template>
  <div style="overflow:hidden;">
    <div class="banner" :style="{'background-image': bannerBg[active] ? 'url(' + bannerBg[active].src + ')' : ''}">
      <el-carousel class="banner-total" trigger="click" :interval="4000" @change="changeCarousel">
        <el-carousel-item v-for="(item, index) in banner" :key="index" class="banner-list">
          <router-link class="banner-link" to="">
            <img class="banner-img" :src="item.imageUrl" alt="">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <div class="main-left">
        <hot />
        <personalise />
        <new-discs />
        <list />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import hot from "./hot.vue";
import list from "./list.vue";
import newDiscs from "./newDiscs.vue";
import personalise from "./personalise.vue";
@Component({
  components: {
    hot,
    list,
    newDiscs,
    personalise
  }
})
export default class recommond extends Vue {
  api = {
    banner: "recommend/banner"
  }
  banner: {}[] = [];
  bannerBg: {src:string}[] = [];
  active = 0;
  created() {
    // 获取推荐轮播数据
    this.$store.dispatch(this.api.banner, { type: 0 }).then(res => {
      this.banner = res.banners;
      // 提前下载图片，避免出现闪烁问题
      this.bannerBg = new Array(this.banner.length);
      res.banners.forEach((item:{imageUrl:string}, index: number) => {
        this.bannerBg[index] = new Image();
        this.bannerBg[index].src = item.imageUrl + "?imageView&blur=40x20";
      });
    });
  }
  changeCarousel(index:number): void {
    this.active = index;
  }
}
</script>
<style lang="scss" scoped>
  .banner {
    height: 285px;
    background-position: center center;
    background-size: 6000px;
    &-total {
      width: 982px;
      height: 100%;
      margin: 0 auto;
    }
    &-img,
    &-link,
    &-list {
      display: block;
      height: 100%;
    }
  }
  .main {
    overflow: hidden;
    margin: 0 auto;
    width: 980px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    min-height: 700px;
    &-left {
      padding: 20px 20px 40px;
      float: left;
      width: calc(100% - 250px);
      border-right: 1px solid #ccc;
      height: 100%;
      min-height: 100%;
    }
  }
</style>
