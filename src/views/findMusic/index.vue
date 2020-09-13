<template>
  <div>
    <div class="main">
      <ul class="main-submenu">
        <li v-for="(item, index) of subMenu" :key="index" class="main-submenu-list" @click="active = index">
          <router-link class="main-submenu-link" :class="{active: active === index}" :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class FindMusic extends Vue {
  // 首页次菜单
  subMenu: {name: string; link: string;}[] = [{
    name: "推荐",
    link: ""
  }, {
    name: "排行榜",
    link: ""
  }, {
    name: "歌单",
    link: ""
  }, {
    name: "主播电台",
    link: ""
  }, {
    name: "歌手",
    link: ""
  }, {
    name: "新碟上架",
    link: ""
  }];
  // 当前激活菜单
  active = 0;
}
</script>
<style lang="scss" scoped>
  .main {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    &-submenu {
      width: 1100px;
      padding-left: 180px;
      height: 34px;
      line-height: 34px;
      margin: 0 auto;
      &-list {
        float: left;
      }
      &-link {
        display: block;
        height: 21px;
        line-height: 21px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;
      }
      &-link.active {
        background: #9B0909;
        border-radius: 20px;
      }
    }
  }
</style>
