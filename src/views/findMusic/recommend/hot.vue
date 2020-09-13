// 热门推荐
<template>
  <div>
    <div class="card-top">
      <router-link class="card-top-link" to="">热门推荐</router-link>
      <el-breadcrumb separator="|" class="card-top-sublink">
        <el-breadcrumb-item v-for="(item, index) of subMenu" :key="index" :to="{ path: '/' }">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-link to="" class="card-top-more">更多<i class="icon-more" /></router-link>
    </div>
    <div class="card-main">
      <ul class="card-total">
        <li v-for="(item, index) of songList" :key="index" class="card-list">
          <div class="card-list-bg">
            <router-link class="card-list-link" to="">
              <img class="card-list-img" :src="item.picUrl" alt="">
            </router-link>
            <div class="card-list-coverbg" />
            <div class="card-list-mask">
              <span class="card-list-iconhead" />
              <span class="card-list-num">{{ item.playCount.toString().length >= 6 ? item.playCount.toString().slice(0, item.playCount.toString().length - 4) + "万" : item.playCoun }}</span>
              <span class="card-list-iconplay" />
            </div>
          </div>
          <router-link class="card-list-des" to="">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class hot extends Vue {
    subMenu: {name:string, link: string}[] = [
      {
        name: "华语",
        link: ""
      },
      {
        name: "流行",
        link: ""
      },
      {
        name: "摇滚",
        link: ""
      },
      {
        name: "民谣",
        link: ""
      },
      {
        name: "电子",
        link: ""
      }
    ];
    songList: {}[] = [];
    api = {
      hotplaylist: "recommend/hotplaylist" // 热门推荐
    }
    created() {
      // 获取热门推荐歌单
      this.$store.dispatch(this.api.hotplaylist, { limit: 8 }).then((res:{result: {}[]}) => {
        this.songList = res.result;
      });
    }
}
</script>
<style lang="scss" scoped>
    .card-top-sublink {
        float: left;
        margin: 7px 0 0 20px;
        font-size: 12px;
        &:hover {
            text-decoration: underline;
        }
    }
    .card-main {
        margin-top: 20px;
        .card-total {
            overflow: hidden;
            margin-left: -42px;
        }
    }
</style>
