// 新碟上架
<template>
  <div>
    <div class="card-top">
      <router-link class="card-top-link" to="">新碟上架</router-link>
      <router-link to="" class="card-top-more">更多<i class="icon-more" /></router-link>
    </div>
    <div class="card-main">
      <el-carousel trigger="click" height="180px" indicator-position="none">
        <el-carousel-item v-for="item in Math.ceil(albumList.length / 5)" :key="item" style="width: 645px;margin-left: 27px;">
          <div v-for="initem in 5" :key="initem" class="album">
            <img :src="albumList[((parseInt(item) - 1) * 5) + parseInt(initem) - 1].picUrl" :alt="item.name">
            <router-link to="" class="album-bg" />
            <router-link to="" class="album-title">{{ albumList[((parseInt(item) - 1) * 5) + parseInt(initem) - 1].name }}</router-link>
            <router-link to="" class="album-name">{{ authorName[((parseInt(item) - 1) * 5) + parseInt(initem) - 1].join("/") }}</router-link>
          </div>
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
    albumList: {}[] = [];
    authorName: [][] = [];
    created() {
      this.$store.dispatch(this.api).then(res => {
        this.albumList = res.monthData;
        this.authorName = res.monthData.map((item:{artists: []}) => {
          return item.artists.map((initem: {name:string}) => {
            return initem.name;
          });
        });
      });
    }
}
</script>
<style lang="scss" scoped>
  .card-main {
    margin-top: 20px;
    background: #f5f5f5;
    .album {
      position: relative;
      float: left;
      padding-top: 28px;
      width: 118px;
      height: 100%;
      text-align: left;
      margin-left: 11px;
      &-bg {
        display: block;
        position: absolute;
        top: 27px;
        left: 0;
        width: 118px;
        height: 100px;
        background: url(../../../assets/frame/coverall.png);
        background-position: 0 -570px;
      }
      img {
        width: 100px;
        height: 100px;
      }
      &-title,
      &-name {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        cursor: pointer;
      }
      &-title:hover,
      &-name:hover {
        text-decoration: underline;
      }
      &-title {
        width: 90%;
        line-height: 18px;
      }
      &-name {
        color: #666;
      }
    }
    .album:nth-child(1) {
        margin-left: 0;
    }
  }
</style>
