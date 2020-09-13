// 榜单
<template>
  <div>
    <div class="card-top">
      <router-link class="card-top-link" to="">榜单</router-link>
      <router-link to="" class="card-top-more">更多<i class="icon-more" /></router-link>
    </div>
    <ul class="card-top-menu">
      <li v-for="(item, index) of baseMenu" :key="index" class="card-top-list">
        <div class="menu-top">
          <div class="menu-top-left">
            <img :src="item.coverImgUrl" :alt="item.name">
            <router-link to="" class="menu-cover" />
          </div>
          <div>
            <router-link to="" class="menu-title text-over">{{ item.name }}</router-link>
            <div class="menu-btn">
              <router-link to="" class="menu-b menu-play" />
              <router-link to="" class="menu-b menu-favorites" />
            </div>
          </div>
        </div>
        <div class="menu-bottom">
          11
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import concurrentRequest from "@/uitls/request";
@Component
export default class list extends Vue {
  toplist = "recommend/toplist";
  baseMenu: {}[] = []
  created() {
    this.$store.dispatch(this.toplist).then(res => {
      console.log(res);
      for (let i = 0; i < 3; i++) {
        this.baseMenu.push({
          name: res.list[i].name,
          coverImgUrl: `${res.list[i].coverImgUrl}?param=100y100`
        });
      }
    });
  }
}
</script>
<style lang="scss" scoped>
  .card-top-menu {
    margin-top: 20px;
    display: flex;
    height: 472px;
    justify-content: space-between;
    border: 1px solid #ccc;
    background: #f4f4f4;
  }
  .card-top-list {
    width: 33.33333%;
    padding: 20px 0 0 19px;
  }
  .card-top-list:nth-child(1),
  .card-top-list:nth-child(2) {
    border-right: 1px solid #ccc;
  }
  .menu-top {
    display: flex;
    &-left {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .menu-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(../../../assets/frame/coverall.png) no-repeat;
    background-position: -145px -57px;
  }
  .menu-title {
    width: 163px;
    margin: 6px 0 0 10px;
    font-size: 14px;
    font-weight: bold;
  }
  .menu-btn {
    margin-left: 10px;
    margin-top: 10px;
  }

  .menu-b {
    display: block;
    float: left;
    width: 22px;
    height: 22px;
    margin-right: 10px;
    background: url(../../../assets/frame/index.png) no-repeat 0 9999px;
  }

  .menu-play {
    background-position: -267px -205px;
    &:hover {
      background-position: -267px -235px
    }
  }
  .menu-favorites {
    background-position: -300px -205px;
    &:hover {
      background-position: -300px -235px;
    }
  }
</style>
