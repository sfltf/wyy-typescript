<template>
  <div class="wyy-header">
    <div class="header-main">
      <div class="top-bg wyy-logo">
        <router-link to="/" />
      </div>
      <ul class="main-menu">
        <li
          v-for="(item, index) of mainMenu"
          :key="index"
          class="main-menu-list"
          :class="{ 'main-menu-list-active': active === index }"
          @click="active = index"
        >
          <router-link v-if="item.local" class="menu-link" :to="item.link">{{
            item.name
          }}</router-link>
          <a v-else class="menu-link" :href="item.link">{{ item.name }}</a>
          <i class="top-bg" :class="{ 'menu-link-sub': active === index }" />
          <sup v-if="index === 5" class="top-bg menu-hot" />
        </li>
      </ul>
      <div class="main-login">
        <span class="main-login-name" @click="login">登录</span>
      </div>
      <div class="main-center">
        <span class="main-center-name" @click="login">创作者中心</span>
      </div>
      <div class="main-search">
        <el-input v-model="music" placeholder="音乐/视频/电台/用户">
          <i slot="prefix" class="el-input__icon el-icon-search" />
        </el-input>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  // 主菜单定义
  mainMenu: { local: boolean; link: string; name: string }[] = [
    {
      local: true,
      link: "",
      name: "发现音乐"
    },
    {
      local: true,
      link: "",
      name: "我的音乐"
    },
    {
      local: true,
      link: "",
      name: "朋友"
    },
    {
      local: false,
      link: "",
      name: "商城"
    },
    {
      local: false,
      link: "",
      name: "音乐人"
    },
    {
      local: true,
      link: "",
      name: "下载客户端"
    }
  ];
  // 当前哪个菜单处于激活状态
  active = 0;
  // 搜索关键字
  music = "";
  login(): void {
    console.log("登录");
  }
}
</script>
<style lang="scss" scoped>
.wyy-header {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  .top-bg {
    background: url("../../../assets/frame/topbar.png") no-repeat 0 9999px;
  }
  .header-main {
    margin: 0 auto;
    width: 1100px;
    .wyy-logo {
      float: left;
      width: 176px;
      height: 69px;

      background-position: 0 0;
      a {
        display: inline-block;
        padding-right: 20px;
        width: 100%;
        height: 100%;
      }
    }
    .main-menu {
      float: left;
      &-list {
        position: relative;
        float: left;
        height: 70px;
        font-size: 14px;
        cursor: pointer;
        &-active,
        &:hover {
          background: #000;
        }
        &-active .menu-link,
        &:hover .menu-link {
          color: #fff !important;
        }
      }
      .menu-link {
        display: inline-block;
        height: 100%;
        padding: 0 19px;
        text-align: center;
        line-height: 70px;
        color: #ccc;
        &-sub {
          display: block;
          position: absolute;
          left: 50%;
          top: 64px;
          width: 12px;
          height: 7px;
          margin-left: -6px;
          overflow: hidden;
          background-position: -226px 0;
        }
      }
      .menu-hot {
        display: block;
        position: absolute;
        top: 21px;
        left: 100px;
        width: 28px;
        height: 19px;
        background-position: -190px 0;
      }
    }
    .main-login {
      float: right;
      height: 45px;
      margin: 19px 0 0 20px;
      padding: 0 22px 0 0;
      background-position: right -47px;
      background-image: none;
      font-size: 12px;
      &-name {
        display: block;
        width: 28px;
        margin-top: 7px;
        color: #787878;
        cursor: pointer;
      }
      &-name:hover {
        text-decoration: underline;
      }
    }
    .main-center {
      float: right;
      width: 90px;
      height: 32px;
      margin: 19px 0 0 12px;
      box-sizing: border-box;
      border: 1px solid #4f4f4f;
      background-position: 0 -140px;
      line-height: 33px;
      color: #ccc;
      border-radius: 20px;
      cursor: pointer;
    }
    .main-center:hover {
      border: 1px solid #fff;
      color: #fff;
    }
    .main-search {
      float: right;
      width: 158px;
      height: 32px;
      margin-top: 20px;
    }
  }
}
</style>
